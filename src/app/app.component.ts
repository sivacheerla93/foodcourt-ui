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

