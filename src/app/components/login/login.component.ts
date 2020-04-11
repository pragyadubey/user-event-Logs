import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { sessionKeys } from 'src/app/utility/app.constant';
import { LoginService } from 'src/app/services/login.service';
import { LoginDataModel } from 'src/app/models/login-data.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData:LoginDataModel;
  failure = false;

    constructor(
       private route: Router,
        private storageService: StorageService,
        private loginService: LoginService) {
        this.loginData = new LoginDataModel();
    }

    ngOnInit() {
    }

    /**
     * This method is used for Authenticating the user
     */
    login() {
      this.failure = false;
      this.route.navigateByUrl('/home');
      this.loginService.userLogin(this.loginData).subscribe(data => {
      this.storageService.write(sessionKeys.login, data);
      this.route.navigateByUrl('/home');
}, error => {
  this.failure = true;
  console.log('error');
});
    }

}
