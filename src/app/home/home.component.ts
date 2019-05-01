import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
    selector: 'home-root',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    title = 'Home';
    foodcourts: any = [];

    constructor(private _foodcourtsService: AppService) {
    }

    ngOnInit() {
        this.getAllFoodcourts();

        $(document).ready(function () {
            ($('.carousel') as any).carousel();
        });
    }

    getAllFoodcourts() {
        this._foodcourtsService.getAllFoodcourts().subscribe(
            (_foodcourts: any) => {
                this.foodcourts = _foodcourts;
            },
            err => console.log(err)
        );
    }
}

