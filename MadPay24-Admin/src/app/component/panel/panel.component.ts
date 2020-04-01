import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../auth/_services/auth.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  JwtHelper = new JwtHelperService();
  constructor(public authService: AuthService ) { }

  ngOnInit() {
    this.getDecodedToken();
  }

  getDecodedToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.decodedToken = this.JwtHelper.decodeToken(token);

    }
  }

}
