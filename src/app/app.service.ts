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

    getSingleFoodcourt(fid) {
        return this._http.get(this.serviceUrl + "/admin/foodcourts/" + fid);
    }

    registerFoodcourt(foodcourt: any) {
        return this._http.post(this.serviceUrl + "/admin/foodcourts", JSON.stringify(foodcourt), this.httpOptions);
    }

    updateFoodcourt(updatedFC) {
        return this._http.put(this.serviceUrl + "/admin/foodcourts/" + updatedFC.id, JSON.stringify(updatedFC), this.httpOptions);
    }

    deleteFoodcourt(foodcourtId) {
        return this._http.delete(this.serviceUrl + "/admin/foodcourts/" + foodcourtId);
    }
}
