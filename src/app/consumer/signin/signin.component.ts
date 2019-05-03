import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../../app.service';
import { User } from '../../schemas/Users';
import { SharedService } from '../../shared-service';
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
    password: String;
    name: any;

    constructor(private _userService: AppService, private _sharedService: SharedService, private route: ActivatedRoute, private router: Router) {
        this.user = new User();
    }

    ngOnInit() {
    }

    validateUser() {
        let fId = $('#email').val();
        let pwd = $('#password').val();

        if (fId == '' || pwd == '') {
            this._sharedService.emitChange('failed');
            alert('Both fields are mandatory!');
            return;
        } else {
            this.user.fId = fId;
            this.user.pwd = pwd;
            this._userService.validateUser(this.user).subscribe(
                (data: any) => {
                    if (data.status == 'not found') {
                        this._sharedService.emitChange('failed');
                        alert(data.fId + " not found!");
                        return;
                    } else if (data.status == 'null') {
                        this._sharedService.emitChange('failed');
                        alert('Invalid email/password!!!');
                        return;
                    } else if (data.status == 'some problem') {
                        this._sharedService.emitChange('failed');
                        alert('There is some problem! Please try again later!!');
                        return;
                    }
                    else if (data.message == 'Invalid email/password!!!') {
                        this._sharedService.emitChange('failed');
                        alert('Invalid password!');
                        return;
                    } else if (data.status == 'success') {
                        this.saveToken(data.token);
                        this._userService.verifyuser(this.token).subscribe(
                            (data: any) => {
                                this.name = data.userinfo[0].name;
                                this._sharedService.emitChange(this.name);
                            }, err => console.log(err)
                        );
                        this.router.navigateByUrl('/', data.token);
                    }
                },
                err => console.log(err)
            );
        }
    }
}