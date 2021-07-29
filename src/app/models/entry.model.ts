export class Entry {
    
    orderId: number;
    timestamp: string;

    constructor(orderId: number) {
        this.orderId = orderId;
        this.timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
    }
}