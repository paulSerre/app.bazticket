import auth from '../../auth_config.json';


export const environment = {
  production: true,  
  BACKEND_HTTPS_SERVER: "https://api.bazticket.com/",
  auth: {
    ...auth,
    redirectUri: window.location.origin,
  },
};
