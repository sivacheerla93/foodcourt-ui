import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../../app.service';
import { Foodcourt } from '../../../schemas/Foodcourt';

@Component({
    selector: 'add-foodcourt-root',
    templateUrl: './add-foodcourt.component.html',
    styleUrls: ['./add-foodcourt.component.css']
})
export class AddFoodcourtComponent {
    title = "Register New Foodcourt";
    foodcourt: any;

    constructor(private _foodcourtsService: AppService, private router: Router) {
        this.foodcourt = new Foodcourt();
    }

    onSubmit() {
        this._foodcourtsService.registerFoodcourt(this.foodcourt).subscribe(
            (data: any) => this.router.navigate(['admin/foodcourts/viewall']),
            err => console.log(err)
        );
    }
}