import { Component } from '@angular/core';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular-6-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private socialAuthService: AuthService) {
    }

    public socialSignIn(socialPlatform: string) {
      console.log("inside");
      let socialPlatformProvider;
      if (socialPlatform === 'google') {
         socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
      }
      
      this.socialAuthService.signIn(socialPlatformProvider).then(userData => {
         this.apiConnection(userData);
      });
      }

      apiConnection(data) {
       console.log("ConnectionData",data);
     }

     logout() {
      this.socialAuthService.signOut().then(data => {
        console.log("logout->",data)
   });
  }

  title = 'HRMS';
}
