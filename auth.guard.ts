import {Injectable} from '@angular/core';
import {Router,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import {CanActivate} from '@angular/router';
import {Auth} from  './services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor (private auth:Auth ,private router:Router){

    }
    CanActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot){
        if(this.auth.authenticated()){
            console.log('AUTH GUARD PASSED');
            return true;

        }else{
            console.log('AUTH GUARD NOT PASSED ');
            this.router.navigate(['/']);
            return false;
        }
    }
}
