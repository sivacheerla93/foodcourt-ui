import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppService {
    private serviceUrl = 'http://localhost:3000';
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private _http: HttpClient) {
    }

    // admin routes
    getAllFoodcourts() {
        return this._http.get(this.serviceUrl + "/admin/foodcourts");
    }
}
