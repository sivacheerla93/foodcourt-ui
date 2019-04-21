import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../../app.service';
import { Item } from '../../schemas/Item';

@Component({
    selector: 'order-root',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
    title = 'Home';
    id: any;
    items: any = [];

    constructor(private _itemsService: AppService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.id = +params['id'];
        });

        this._itemsService.getAllItems(this.id).subscribe((data: any) => {
            this.items = data;
            this.items.forEach(element => {
                var binary = '';
                var base64Flag = 'data:image/jpg;base64,';
                var bytes = [].slice.call(new Uint8Array(element.img.data.data));
                bytes.forEach((b) => binary += String.fromCharCode(b));
                var imgStr = window.btoa(binary);
                var base64Img = base64Flag + imgStr;
                element.img.data.data = base64Img;
            });
        }, err => console.log(err));

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
