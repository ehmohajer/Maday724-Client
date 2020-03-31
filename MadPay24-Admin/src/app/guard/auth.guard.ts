import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/_services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private authSrvice: AuthService, private router: Router, private alertService: ToastrService) { }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authSrvice.logged()) {
      return true;
    } else {
    this.alertService.error( 'شما مجوز دسترسی به این بخش را ندارید', 'هشدار');
    this.router.navigate(['/auth/login'], {
      queryParams: {
        return: state.url
      }
    });
    return false;
    }
  }
}
