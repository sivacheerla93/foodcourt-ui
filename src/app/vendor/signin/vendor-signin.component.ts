import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../../app.service';
import { Vendor } from '../../schemas/Vendor';
import * as $ from 'jquery';

@Component({
    selector: 'vendor-signin-root',
    templateUrl: './vendor-signin.component.html',
    styleUrls: ['./vendor-signin.component.css']
})
export class VendorSignInComponent implements OnInit {
    title = 'Home';
    vendor: any;

    constructor(private _vendorService: AppService, private route: ActivatedRoute, private router: Router) {
        this.vendor = new Vendor();
    }

    ngOnInit() {
    }

    validateVendor() {
        let fId = $('#foodcourtId').val();
        let pwd = $('#pwd').val();

        if (fId == '' || pwd == '') {
            alert('Both fields are mandatory!');
            return;
        } else {
            this.vendor.fId = Number(fId);
            this.vendor.pwd = pwd;
            this._vendorService.validateVendor(this.vendor).subscribe(
                (data: any) => {
                    if (data.status == 'not found') {
                        alert(data.fId + " not found!");
                        return;
                    } else if (data.status == 'invalid') {
                        alert('Invalid password!');
                        return;
                    } else if (data.status == 'some problem') {
                        alert('There is some problem! Please try again later!!');
                        return;
                    } else if (data.status == 'valid') {
                        this.router.navigate(['vendor/menu/view/' + data.fId]);
                    }
                },
                err => console.log(err)
            );
        }
    }
}
