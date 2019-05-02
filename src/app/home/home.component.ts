import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
//import * as $ from 'jquery';

@Component({
    selector: 'home-root',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    private token: string;
    title = 'Home';
    foodcourts: any = [];

    constructor(private _foodcourtsService: AppService) {
    }

    ngOnInit() {
        this.getAllFoodcourts();

        this.token = localStorage.getItem('mean-token');
        //alert(this.token);

        $(document).ready(function () {
            ($('.carousel') as any).carousel();
        });
    }

    private getToken(): string {
        if (!this.token) {
            this.token = localStorage.getItem('mean-token');
        }
        return this.token;
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

