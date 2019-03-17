import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home-root',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    title = 'Home';
    $: any;

    // ngOnInit() {
    //     $(document).ready(function () {
    //         $('.carousel').carousel();
    //     })
    // }
}

