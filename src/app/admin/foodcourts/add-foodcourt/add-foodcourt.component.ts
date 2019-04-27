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
    base64String: string;

    constructor(private _foodcourtsService: AppService, private router: Router) {
        this.foodcourt = new Foodcourt();
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
        this.foodcourt.img = this.base64String;
        this._foodcourtsService.registerFoodcourt(this.foodcourt).subscribe(
            (data: any) => this.router.navigate(['admin/foodcourts/viewall']),
            err => console.log(err)
        );
    }
}