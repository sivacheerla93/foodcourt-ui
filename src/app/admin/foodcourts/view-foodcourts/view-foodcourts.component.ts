import { Component } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
    selector: 'view-foodcourts-root',
    templateUrl: './view-foodcourts.component.html',
    styleUrls: ['./view-foodcourts.component.css']
})
export class ViewFoodcourtsComponent {
    title = "All Foodcourts";
    foodcourts: any = [];

    constructor(private _foodcourtsService: AppService) {
    }

    ngOnInit(): void {
        this.getAllFoodcourts();
    }

    getAllFoodcourts() {
        this._foodcourtsService.getAllFoodcourts().subscribe(
            (_foodcourts: any) => this.foodcourts = _foodcourts,
            err => console.log(err)
        );
    }

    deleteFoodcourt(foodcourtId) {
        var c = confirm('Deleting foodcourt can also delete orders associated with foodcourt and menu present in the same!');
        if (c == true) {
            this._foodcourtsService.deleteFoodcourt(foodcourtId).subscribe(
                (data: any) => this.getAllFoodcourts(),
                err => console.log(err)
            );
        }
    }
}