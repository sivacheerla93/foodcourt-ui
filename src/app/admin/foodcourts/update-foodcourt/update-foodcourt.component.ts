import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../../../app.service';
import { Foodcourt } from '../../../schemas/Foodcourt';

@Component({
    selector: 'update-foodcourt-root',
    templateUrl: './update-foodcourt.component.html',
    styleUrls: ['./update-foodcourt.component.css']
})
export class UpdateFoodcourtComponent {
    title = "Update Foodcourt";
    id: any;
    foodcourt: any;

    constructor(private _foodcourtService: AppService, private route: ActivatedRoute, private router: Router) {
        this.foodcourt = new Foodcourt();
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.id = +params['id'];
        });
        this._foodcourtService.getSingleFoodcourt(this.id).subscribe((data: any) => {
            this.foodcourt.id = data[0].id;
            this.foodcourt.name = data[0].name;
            this.foodcourt.email = data[0].contact.email;
            this.foodcourt.mobile = data[0].contact.mobile;
            this.foodcourt.password = data[0].password;
            this.foodcourt.gst = data[0].gst;
            this.foodcourt.validity = data[0].validity;
            this.foodcourt.locality = data[0].address.locality;
            this.foodcourt.city = data[0].address.city;
        }, err => console.log(err));
    }

    onSubmit(formValue: any) {
        this._foodcourtService.updateFoodcourt(this.foodcourt).subscribe(
            (data: any) => this.router.navigate(['admin/foodcourts/viewall']),
            err => console.log(err)
        );
    }
}