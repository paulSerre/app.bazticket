import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Entry } from 'src/app/models/entry.model';
import { EntriesService } from 'src/app/services/entries.service';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {

  orderId!: string;                 // Two-way binded with input. 
  prevOrderId!: string;             // Allow multiple requets by preventing submit if input didn't change

  order!: any;                      // Result of get request. Hide result block if undefined.
  entries!: any;                    // Entries associated to te order.

  scannerEnabled: boolean = true;   // Allow to show or not the video.
  isLoading: boolean=false;         // Allow to show or not the spinner.

  constructor(
    private wordpressService: WordpressService,
    private entriesService: EntriesService
  ) { }

  ngOnInit(): void {
  }

  scanSuccessHandler(value: string) {
    if (this.orderId !== value) {
      this.orderId = value;
      this.onSubmit();
    }
  }

  onSubmit() {
    this.prevOrderId = this.orderId;
    this.scannerEnabled = false;
    this.isLoading = true;
    // Get order's data
    forkJoin([
      this.wordpressService.getOrderById(+this.orderId),
      this.entriesService.getEntriesByOrderId(+this.orderId).pipe(catchError(error => {
        this.entries = [];
        return of(error);
      })) // In case no entries have been added, we have to handle the not found error
    ]).subscribe(
    (response) => {
      this.isLoading = false;
      this.order = response[0];
      if (!(response[1] instanceof HttpErrorResponse)) this.entries = response[1];
    },
    (error) => {
      console.log(error);
      this.order = undefined;
      this.isLoading = false;
    });
  }

  onAddEntry() {
    this.entriesService.createNewEntry(new Entry(+this.orderId))
    .subscribe(
      (_) => {
        this.scannerEnabled = true;   // Show scanner
        this.order = undefined;       // Hide result block
        this.orderId = '';            // Reset input
        this.prevOrderId = '';        // Allow to scan same ticket
      },
      (error) => {
        console.log(error);
      }
    )


  }

  onCancel() {
    this.scannerEnabled = true;   // Show scanner
    this.order = undefined;       // Hide result block
    this.orderId = '';            // Reset input
    this.prevOrderId = '';        // Allow to scan same ticket
  }

}
