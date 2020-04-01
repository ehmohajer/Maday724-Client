import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  retuenUrl = '';
  constructor(private authService: AuthService, private router: Router,
              private alertService: ToastrService, private routh: ActivatedRoute) { }

  ngOnInit() {
    this.routh.queryParams.subscribe(params => this.retuenUrl = params.return || '/panel/dashboard');
    if (this.loggedin()) {
    this.router.navigate([this.retuenUrl]);
    }
  }


login() {
  this.authService.login(this.model).subscribe(next => {
    this.router.navigate([this.retuenUrl]);
    this.alertService.success('با موفقیت وارد شدید', 'ورود');
  }, error => {
    this.alertService.error(error, 'خطا');
  });
}

loggedin() {
  return this.authService.logged();
}

}
