import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../../app.service';
import { Item } from '../../schemas/Item';
import { ManageOrdersComponent } from 'src/app/vendor/manage-orders/manage-orders.component';

@Component({
    selector: 'order-root',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
    title = 'Home';
    id: any;
    items: any = [];
    orders = [];

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
    }

    addItem(itemNo, itemName, itemPrice) {
        let counterId = '#counter' + itemNo;
        let item;

        var count = Number($(counterId).val());
        $(counterId).val(count + 1);

        if (Number($(counterId).val()) == 1) {
            item = { id: Number(itemNo), name: itemName, quantity: Number($(counterId).val()), price: itemPrice };
            this.orders.push(item);
        } else if (Number($(counterId).val()) > 1) {
            this.orders[itemNo].quantity = Number($(counterId).val());
            this.orders[itemNo].price = Number($(counterId).val()) * itemPrice;
        }
    }

    removeItem(itemNo, itemName, itemPrice) {
        let itemId = itemNo;
        let counterId = '#counter' + itemNo;

        var count = Number($(counterId).val());
        $(counterId).val(count - 1);

        if (Number($(counterId).val()) < 0) {
            $(counterId).val(Number(0));
        } else if (Number($(counterId).val()) == 0) {
            for (let i = 0; i < this.orders.length; i++) {
                if (this.orders[i].id == Number(itemNo)) {
                    this.orders.splice(this.orders[i], 1);
                }
            }
        }
    }
}
