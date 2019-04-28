import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
    fId: any;

    constructor(private _itemsService: AppService, private route: ActivatedRoute, private router: Router) {
        this.item = new Item();
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.fId = +params['id'];
        });
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
        this.item.foodcourt_id = this.fId;
        this.item.img = this.base64String;
        this._itemsService.addItem(this.item).subscribe(
            (data: any) => {
                this.router.navigate(['vendor/menu/view/' + this.fId]);
            },
            err => console.log(err)
        );
    }
}