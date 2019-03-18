import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';

@Component({
    selector: 'signin-root',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {
    title = 'Home';

    ngOnInit() {
        // $(document).ready(function () {
        //     ($('#signInModal') as any).modal();
        // });
    }


}
