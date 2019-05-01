import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../../app.service';
import { Order } from '../../schemas/Order';
import * as $ from 'jquery';

@Component({
    selector: 'order-root',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
    title = 'Home';
    id: any;
    fName: any;
    address: any;
    city: any;
    items: any = [];
    orders = [];
    subtotal: number = 0;
    taxes: number = 0;
    total: number = 0;
    description: string = '';
    order: any;

    constructor(private _itemsService: AppService, private route: ActivatedRoute, private router: Router) {
        this.order = new Order();
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.id = +params['id'];
        });

        this._itemsService.getSingleFoodcourt(this.id).subscribe(
            (data: any) => {
                this.fName = data[0].name;
                this.address = data[0].address.locality;
                this.city = data[0].address.city;
            },
            err => console.log(err)
        );

        this._itemsService.getAllItems(this.id).subscribe((data: any) => {
            this.items = data;
            // this.items.forEach(element => {
            //     var binary = '';
            //     var base64Flag = 'data:image/jpg;base64,';
            //     var bytes = [].slice.call(new Uint8Array(element.img.data.data));
            //     bytes.forEach((b) => binary += String.fromCharCode(b));
            //     var imgStr = window.btoa(binary);
            //     var base64Img = base64Flag + imgStr;
            //     element.img.data.data = base64Img;
            // });
        }, err => console.log(err));
    }

    addItem(itemNo, itemName, itemPrice) {
        let counterId = '#counter' + itemNo;
        let item;

        var count = Number($(counterId).val());
        $(counterId).val(count + 1);

        if (Number($(counterId).val()) == 1) {
            item = { itemNo: Number(itemNo), name: itemName, quantity: Number($(counterId).val()), price: Number(itemPrice) };
            this.orders.push(item);
            this.calculateAmount(Number(itemPrice), 'add');
        } else if (Number($(counterId).val()) > 1) {
            for (var i = 0; i < this.orders.length; i++) {
                if (this.orders[i].itemNo == Number(itemNo)) {
                    this.orders[i].quantity = Number($(counterId).val());
                    this.orders[i].price = Number($(counterId).val()) * Number(itemPrice);
                    this.calculateAmount(Number(itemPrice), 'add');
                    break;
                }
            }
        }
    }

    removeItem(itemNo, itemName, itemPrice) {
        let counterId = '#counter' + itemNo;

        var count = Number($(counterId).val());
        $(counterId).val(count - 1);

        if (Number($(counterId).val()) < 0) {
            $(counterId).val(Number(0));
        } else if (Number($(counterId).val()) == 0) {
            for (var i = 0; i < this.orders.length; i++) {
                if (this.orders[i].itemNo == Number(itemNo)) {
                    this.orders.splice(i, 1);
                    this.calculateAmount(Number(itemPrice), 'remove');
                    break;
                }
            }
        } else if (Number($(counterId).val()) > 0) {
            for (var i = 0; i < this.orders.length; i++) {
                if (this.orders[i].itemNo == Number(itemNo)) {
                    this.orders[i].quantity = Number($(counterId).val());
                    this.orders[i].price = Number($(counterId).val()) * Number(itemPrice);
                    this.calculateAmount(Number(itemPrice), 'remove');
                    break;
                }
            }
        }
    }

    calculateAmount(amount, flag) {
        if (flag == 'add') {
            this.subtotal += amount;
        } else if (flag == 'remove') {
            this.subtotal -= amount;
        }

        this.taxes = (this.subtotal / 100) * 18;
        this.total = this.subtotal + this.taxes;
    }

    backToFoodcourts() {
        var i = confirm("Do you want to go back?");
        if (i == true) {
            this.router.navigate(['/']);
        }
    }

    checkout() {
        if (this.orders.length == 0) {
            alert('Select items!');
            return;
        } else {
            for (var i = 0; i < this.orders.length; i++) {
                this.description += this.orders[i].name + " - " + this.orders[i].quantity + ", ";
            }
            this.order.foodcourt_id = this.id;
            this.order.fname = this.fName;
            this.order.description = this.description;
            this.order.amount = this.total;
            this._itemsService.createNewOrder(this.order).subscribe(
                (data: any) => {
                    this.router.navigate(['consumer/order-checkout/' + data]);
                },
                err => console.log(err)
            );
        }
    }
}
