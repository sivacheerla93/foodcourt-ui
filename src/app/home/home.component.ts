import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';

@Component({
    selector: 'home-root',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    title = 'Home';

    ngOnInit() {
        $(document).ready(function () {
            ($('.carousel') as any).carousel();
        });
    }
}

