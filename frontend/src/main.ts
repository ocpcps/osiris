import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';  // Importa as rotas
import { provideHttpClient } from '@angular/common/http';
import { KeycloakService } from 'keycloak-angular';
import { APP_INITIALIZER } from '@angular/core';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: 'assets/keycloak.json',
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false
      },
      enableBearerInterceptor: true,
      bearerExcludedUrls: ['/assets']
    });
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    KeycloakService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ]
}).catch(err => console.error(err));
