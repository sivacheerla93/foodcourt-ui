import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './shared-service';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'foodcourt-ui';
  name: any;
  private token = localStorage.getItem('mean-token');

  constructor(private router: Router, private _sharedService: SharedService, private _ordersService: AppService) {
    _sharedService.changeEmitted$.subscribe(
      text => {
        if (text == 'failed') {
          $('#username').text();
          $('#signin, #signup').show();
          $('#logout').hide();
        } else {
          $('#username').text('Welcome! ' + text);
          $('#signin, #signup').hide();
          $('#logout').show();
        }
      });
  }

  ngOnInit() {
    $(document).on('click', function () {
      ($('.collapse') as any).collapse('hide');
    });
  }

  vendorSignIn() {
    if (localStorage.getItem('mean-token') == null) {
      this.router.navigate(['vendor/signin']);
    } else if (localStorage.getItem('mean-token') != null) {
      alert('A consumer has been logged in! Please do logout first!!');
      return;
    }
  }

  adminSignIn() {
    if (localStorage.getItem('mean-token') == null) {
      this.router.navigate(['admin/signin']);
    } else if (localStorage.getItem('mean-token') != null) {
      alert('A consumer has been logged in! Please do logout first!!');
      return;
    }
  }

  logout() {
    window.localStorage.removeItem('mean-token');
    $('#username').text('');
    $('#signin, #signup').show();
    $('#logout').hide();
    this.router.navigateByUrl('/');
    alert("Logout Successfully!!");
  }
}

