import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';

@Component({
    selector: 'success-root',
    templateUrl: './success.component.html',
    styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
    title = 'Home';

    ngOnInit() {
        $(document).ready(function () {
            ($('#myModal') as any).modal();
        });
    }


}
