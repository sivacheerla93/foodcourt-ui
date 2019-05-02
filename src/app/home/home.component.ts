import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
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

    constructor(private _foodcourtsService: AppService, private router: Router) {
    }

    ngOnInit() {
        this.token = localStorage.getItem('mean-token');
        this._foodcourtsService.verifyuser(this.token).subscribe(
            (data: any) => {
                if (data.status == 'error') {
                    if (data.message == 'jwt must be provided') {
                        this.router.navigateByUrl('/consumer/signin');
                        return;
                    } else if (data.message == 'jwt expired') {
                        console.log('session Expired');
                        this.router.navigate(['consumer/signin']);
                        return;
                    } else if (data.message == 'invalid token') {
                        console.log('Invalid login');
                        this.router.navigate(['consumer/signin']);
                        return;
                    }
                } else if (data.status == 'success') {
                    this.getAllFoodcourts();
                    //alert(this.token);

                    $(document).ready(function () {
                        ($('.carousel') as any).carousel();
                    });
                }
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

