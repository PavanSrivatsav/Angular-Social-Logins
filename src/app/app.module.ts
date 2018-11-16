import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider
} from 'angular-6-social-login';


export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
  [
  {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider('347965750066-o0pnh4a47nirp79od5gugcjc4j18mfu4.apps.googleusercontent.com')
  }
  ]
  );
  return config;
  }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
