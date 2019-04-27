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
    base64String: string;

    constructor(private _itemsService: AppService, private router: Router) {
        this.item = new Item();
    }

    onUploadImage(event: any) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = this.handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    }

    handleReaderLoaded(e) {
        this.base64String = 'data:image/jpg;base64,' + btoa(e.target.result);
    }

    onSubmit() {
        this.item.img = this.base64String;
        this._itemsService.addItem(this.item).subscribe(
            (data: any) => {
                this.router.navigate(['vendor/menu/view'])
            },
            err => console.log(err)
        );
    }
}