import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router} from '@angular/router';
import {UsernameService} from "./shared/services/username.service";

@Injectable()
export class UsernameGuard implements CanActivateChild {

  constructor(private service: UsernameService, private router: Router) {}

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.service.getUsername()) {
      this.router.navigate(['/login']);
    }
    return !!this.service.getUsername();
  }

}
