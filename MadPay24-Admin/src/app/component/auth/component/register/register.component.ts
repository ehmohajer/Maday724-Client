import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
model: any = {};
  constructor(private authService: AuthService, private alertService: ToastrService) { }

  ngOnInit() {
  }
register() {
  this.authService.register(this.model).subscribe(() => {
    this.alertService.success('با موفقیت وارد شدید', 'ورود');
    console.log('Success Register');
  // tslint:disable-next-line:no-shadowed-variable
  }, error => {
    this.alertService.error(error, 'خطا');
  });
}

}
