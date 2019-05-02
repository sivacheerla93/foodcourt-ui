import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as $ from 'jquery';

@Component({
    selector: 'admin-signin-root',
    templateUrl: './admin-signin.component.html',
    styleUrls: ['./admin-signin.component.css']
})
export class AdminSignInComponent implements OnInit {
    title = 'Home';

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        // $(document).ready(function () {
        //     ($('#signInModal') as any).modal();
        // });
    }

    validate() {
        let uname = $('#username').val();
        let pwd = $('#pwd').val();
        if (uname == 'admin' && pwd == 'foodcourt456') {
            this.router.navigate(['admin/foodcourts/viewall']);
        } else {
            alert('Invalid username (or) password!');
            return;
        }
    }

}
