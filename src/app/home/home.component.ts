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
                this.foodcourts.forEach(element => {
                    var binary = '';
                    var base64Flag = 'data:image/jpg;base64,';
                    var bytes = [].slice.call(new Uint8Array(element.img.data.data));
                    bytes.forEach((b) => binary += String.fromCharCode(b));
                    var imgStr = window.btoa(binary);
                    var base64Img = base64Flag + imgStr;
                    element.img.data.data = base64Img;
                });
            },
            err => console.log(err)
        );
    }
}

