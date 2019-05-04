import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SharedService } from '../shared-service';
//import * as $ from 'jquery';

@Component({
    selector: 'home-root',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    private token: string;
    title = 'Home';
    userData: any;
    foodcourts: any = [];
    name: any;

    constructor(private _foodcourtsService: AppService, private _sharedService: SharedService, private router: Router) {
    }

    ngOnInit() {
        this.token = localStorage.getItem('mean-token');
        this._foodcourtsService.verifyuser(this.token).subscribe(
            (data: any) => {
                this.userData = data;
                if (this.userData.status == 'error') {
                    this._sharedService.emitChange('failed');
                } else if (this.userData.status == 'success') {
                    this.name = this.userData.userinfo[0].name;
                    this._sharedService.emitChange(this.name);
                }
            });

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

    validateUserAndproceed(fId) {
        if (localStorage.getItem('mean-token') == null) {
            alert('Please do login!');
            this.router.navigate(['consumer/signin']);
        } else if (localStorage.getItem('mean-token') != null) {
            this.router.navigate(['consumer/order/' + fId]);
        }
    }
}
