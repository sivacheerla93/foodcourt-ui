import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../../../app.service';
import { Item } from '../../../schemas/Item';

@Component({
    selector: 'update-item-root',
    templateUrl: './update-item.component.html',
    styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent {
    title = "Update Item";
    id: any;
    item: any;
    base64String: string;

    constructor(private _itemsService: AppService, private route: ActivatedRoute, private router: Router) {
        this.item = new Item();
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.id = +params['id'];
        });
        this._itemsService.getSingleItem(this.id).subscribe((data: any) => {
            this.item.id = data[0].id;
            this.item.name = data[0].name;
            this.item.price = data[0].price;
            this.item.availability = data[0].availability;
        }, err => console.log(err));
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

    onSubmit(formValue: any) {
        this.item.img = this.base64String;
        this._itemsService.updateItem(this.item).subscribe(
            (data: any) => this.router.navigate(['vendor/menu/view']),
            err => console.log(err)
        );
    }
}