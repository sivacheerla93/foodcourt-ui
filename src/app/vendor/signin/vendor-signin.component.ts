import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';

@Component({
    selector: 'vendor-signin-root',
    templateUrl: './vendor-signin.component.html',
    styleUrls: ['./vendor-signin.component.css']
})
export class VendorSignInComponent implements OnInit {
    title = 'Home';

    ngOnInit() {
        // $(document).ready(function () {
        //     ($('#signInModal') as any).modal();
        // });
    }


}
