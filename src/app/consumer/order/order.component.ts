import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'order-root',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
    title = 'Home';

    ngOnInit() {
        // For quantity spinner
        $(document).ready(function () {
            $('.count').prop('disabled', true);
            $(document).on('click', '.plus', function () {
                $('.count').val(Number($('.count').val()) + 1);
            });
            $(document).on('click', '.minus', function () {
                $('.count').val(Number($('.count').val()) - 1);
                if ($('.count').val() == 0) {
                    $('.count').val(1);
                }
            });
        });
    }


}
