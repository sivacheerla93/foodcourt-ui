import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../../app.service';
import { Item } from '../../../schemas/Item';

@Component({
    selector: 'add-item-root',
    templateUrl: './add-item.component.html',
    styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
    title = "Add Item";
    item: any;

    constructor(private _itemsService: AppService, private router: Router) {
        this.item = new Item();
    }

    onSubmit() {
        this._itemsService.addItem(this.item).subscribe(
            (data: any) => {
                this.router.navigate(['vendor/menu/view'])
            },
            err => console.log(err)
        );
    }
}