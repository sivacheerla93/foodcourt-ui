import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../../../app.service';

@Component({
    selector: 'view-items-root',
    templateUrl: './view-items.component.html',
    styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent {
    title = "All Items";
    fId: any;
    fName: any;
    items: any = [];
    private token: string;
    st: string;

    constructor(private _itemsService: AppService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.fId = +params['id'];
        });
        this._itemsService.getSingleFoodcourt(this.fId).subscribe(
            (data: any) => {
                this.fName = data[0].name;
            },
            err => console.log(err)
        );
        this.getAllItems(this.fId);
    }

    getAllItems(fId) {
        this._itemsService.getAllItems(fId).subscribe(
            (_items: any) => {
                this.items = _items;
            },
            err => console.log(err)
        );
    }

    deleteItem(itemId) {
        this._itemsService.deleteItem(itemId).subscribe(
            (data: any) => this.getAllItems(this.fId),
            err => console.log(err));
    }
}