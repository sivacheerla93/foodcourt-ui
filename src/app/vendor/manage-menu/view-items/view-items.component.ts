import { Component } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
    selector: 'view-items-root',
    templateUrl: './view-items.component.html',
    styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent {
    title = "All Items";

    items: any = [];

    constructor(private _itemsService: AppService) {
    }

    ngOnInit(): void {
        this.getAllItems();
    }

    getAllItems() {
        this._itemsService.getAllItems(1100).subscribe(
            (_items: any) => {
                this.items = _items;
                // this.items.forEach(element => {
                //     var binary = '';
                //     var base64Flag = 'data:image/jpg;base64,';
                //     var bytes = [].slice.call(new Uint8Array(element.img.data.data));
                //     bytes.forEach((b) => binary += String.fromCharCode(b));
                //     var imgStr = window.btoa(binary);
                //     var base64Img = base64Flag + imgStr;
                //     element.img.data.data = base64Img;
                // });
            },
            err => console.log(err)
        );
    }

    deleteItem(itemId) {
        this._itemsService.deleteItem(itemId).subscribe(
            (data: any) => this.getAllItems(),
            err => console.log(err));
    }
}