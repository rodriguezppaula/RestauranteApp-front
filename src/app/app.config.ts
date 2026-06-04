import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
<<<<<<< HEAD
import { provideHttpClient, withInterceptors, withFetch } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';
import { routes } from './app.routes';
=======
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
>>>>>>> 231e3970ecbbae4c590ae37fd3b46042c89b7ff0

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
<<<<<<< HEAD
    provideHttpClient(withInterceptors([authInterceptor]), withFetch()),
    provideRouter(routes)
  ]
};
=======
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(routes), provideClientHydration(withEventReplay())
  ]
};
>>>>>>> 231e3970ecbbae4c590ae37fd3b46042c89b7ff0
