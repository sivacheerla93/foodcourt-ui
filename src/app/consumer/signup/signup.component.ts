import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { RegisterUser } from '../../schemas/registeruser';
//import * as $ from 'jquery';

@Component({
    selector: 'signup-root',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
    title = 'Home';
    consumer: any;

    constructor(private _RegisterService: AppService, private router: Router) {
        this.consumer = new RegisterUser();
    }

    ngOnInit() {

    }

    onSubmit() {
        let mobile = ($('#mobile').val()).toString();
        let email = ($('#email').val()).toString();
        var checkMobile = /^[6789]\d{9}$/;
        var checkEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (!(checkMobile.test(mobile))) {
            alert('Invalid mobile number!');
            $('#mobile').focus();
            return;
        } else if (!(checkEmail.test(email))) {
            alert('Invalid email address!');
            $('#email').focus();
            return;
        } else {
            this._RegisterService.registeruser(this.consumer).subscribe(
                (data: any) => {
                    if (data.status == 'success') {
                        this.router.navigate(['consumer/signin']);
                    }
                    else if (data.status == 'User already exists') {
                        alert('Entered email address already registered with us!');
                        return;
                    }
                    err => console.log(err)
                }
            );
        }
    }
}
