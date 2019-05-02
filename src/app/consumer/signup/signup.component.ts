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
    base64String: string;

    constructor(private _RegisterService: AppService, private router: Router) {
        this.consumer = new RegisterUser();
    }

    ngOnInit() {

    }

    /* onUploadImage(event: any) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = this.handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
      }

     handleReaderLoaded(e) {
        this.base64String = 'data:image/jpg;base64,' + btoa(e.target.result);
    }*/

    onSubmit() {
        console.log('submit');
        //this.consumer.img = this.base64String;
        this._RegisterService.registeruser(this.consumer).subscribe(
            (data: any) => {
                console.log(data.status);
                this.router.navigate(['consumer/signin']);
                err => console.log(err)
            }
        );
    }

}
