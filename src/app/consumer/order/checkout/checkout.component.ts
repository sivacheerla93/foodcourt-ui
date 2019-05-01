import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../../../app.service';
import { Order } from '../../../schemas/Order';
import * as $ from 'jquery';

@Component({
    selector: 'checkout-root',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
    title = 'Home';
    order: any = [];
    oid: any;

    constructor(private _ordersService: AppService, private route: ActivatedRoute, private router: Router) {
        this.order = new Order();
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.oid = +params['oid'];
        });
    }

    validateFields() {
        let fullname = $('#fullname').val();
        let mobile = $('#mobile').val();
        let email = $('#email').val();
        let address = $('#address').val();
        let city = $('#city').val();

        if (fullname == '' || mobile == '' || email == '' || address == '' || city == '') {
            alert('All fields are mandatory!');
            return;
        } else {
            this.order.id = Number(this.oid);
            this.order.name = fullname;
            this.order.mobile = mobile;
            this.order.email = email;
            this.order.locality = address;
            this.order.city = city;

            this._ordersService.updateOrder(this.order).subscribe(
                (data: any) => {
                    window.location.href = '/callPaymentPage/' + data;
                },
                err => console.log(err)
            );
        }
    }

}
