import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
    selector: 'manage-orders-root',
    templateUrl: './manage-orders.component.html',
    styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {
    title = "Manage Orders";
    orders: any = [];
    constructor(private _itemsService: AppService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        // this.route.params.forEach((params: Params) => {
        //     this.id = +params['id'];
        // });

        this._itemsService.getAllOrders(1100).subscribe((data: any) => {
            this.orders = data;
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
}