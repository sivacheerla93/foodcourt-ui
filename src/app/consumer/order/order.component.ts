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
    orders: any = [];

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

    addItem(itemNo, itemName) {
        const component = this;
        let itemId = itemNo;
        let plusId = '#plus' + itemId;
        let counterId = '#counter' + itemId;
        let item;
        let counterVal = Number($(counterId).val());
        $(plusId).click(function () {
            $(counterId).val(Number(counterVal + 1));
            if ($(counterId).val() > 0) {
                item = { name: itemName, quantity: counterVal };
                component.addItemToOrders(item);
            }
        });
    }

    removeItem(itemNo, itemName) {
        let itemId = itemNo;
        let minusId = '#minus' + itemId;
        let counterId = '#counter' + itemId;
        let counterVal = Number($(counterId).val());
        $(minusId).click(function () {
            $(counterId).val(Number(counterVal - 1));
            if ($(counterId).val() == 0 || $(counterId).val() < 0) {
                $(counterId).val(Number(0));
            }
        });
    }

    addItemToOrders(item) {
        console.log(item.quantity);
    }

}
