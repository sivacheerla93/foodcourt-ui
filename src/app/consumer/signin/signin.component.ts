import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../../app.service';
import { User } from '../../schemas/Users';
import * as $ from 'jquery';

@Component({
    selector: 'signin-root',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {
    private token: string;
    private saveToken(token: string): void {
        localStorage.setItem('mean-token', token);
        this.token = token;
    }
    title = 'Home';
    user: any;
    email: String;
    password: String

    constructor(private _userService: AppService, private route: ActivatedRoute, private router: Router) {
        this.user = new User();
    }

    ngOnInit() {
        // $(document).ready(function () {
        //     ($('#signInModal') as any).modal();
        // });
    }

    /*onSubmit(formValue: any){
        console.log("Form Value = " + JSON.stringify(formValue, null, 4));
        let userdetail = {
            email: formValue.email,
            password: formValue.password
            };
        this._userService.validateUser(userdetail).subscribe(
          (data:any) =>   
          {
                         //this.router.navigate(['consumer/order-checkout']);
                         if (data.status == 'not found') {
                             alert(data.fId + " not found!");
                             return;
                         } else if (data.status == 'invalid') {
                             alert('Invalid password!');
                             return;
                         } else if (data.status == 'some problem') {
                             alert('There is some problem! Please try again later!!');
                             return;
                         } else if (data.status == 'success') {
                             this.router.navigate(['/' + data.fId]);
                         }
                     },
                     err => console.log(err)
        );
       
      }*/
    validateUser() {
        let fId = $('#email').val();
        let pwd = $('#password').val();

        if (fId == '' || pwd == '') {
            alert('Both fields are mandatory!');
            return;
        } else {
            this.user.fId = fId;
            this.user.pwd = pwd;
            console.log("---------")
            console.log(this.user);
            this._userService.validateUser(this.user).subscribe(
                (data: any) => {
                    console.log("------data");
                    console.log(data.status);
                    console.log(data.token);

                    //this.router.navigate(['consumer/order-checkout']);
                    if (data.status == 'not found') {
                        alert(data.fId + " not found!");
                        return;
                    } else if (data.status == 'null') {
                        alert('Invalid email/password!!!');
                        return;
                    } else if (data.status == 'some problem') {
                        alert('There is some problem! Please try again later!!');
                        return;
                    }
                    else if (data.message == 'Invalid email/password!!!') {
                        alert('Invalid password!');
                        return;
                    } else if (data.status == 'success') {
                        console.log(data.token);
                        // this.auth.login(data.token).subscribe(() => {
                        //  this.router.navigateByUrl('/');
                        // }, (err) => {
                        //  console.error(err);
                        //});
                        this.saveToken(data.token);
                        this.router.navigateByUrl('/', data.token);
                    }
                },
                err => console.log(err)
            );
        }
    }
}