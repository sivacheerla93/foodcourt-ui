import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';

@Component({
    selector: 'admin-signin-root',
    templateUrl: './admin-signin.component.html',
    styleUrls: ['./admin-signin.component.css']
})
export class AdminSignInComponent implements OnInit {
    title = 'Home';

    ngOnInit() {
        // $(document).ready(function () {
        //     ($('#signInModal') as any).modal();
        // });
    }


}
