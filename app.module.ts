import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing,appRoutingProviders} from './app.routing';

import { AppComponent }  from './app.component';
import { AddComponent }  from './Components/add/add.component';
import { DetailComponent }  from './Components/detail/detail.component';
import {AUTH_PROVIDERS} from 'angular2-jwt';
import {Auth} from './services/auth.service';
import {AuthGuard} from './auth.guard';

@NgModule({
  imports:      [ BrowserModule , routing],
  declarations: [ AppComponent,AddComponent,DetailComponent ],
  bootstrap:    [ AppComponent ],
  providers:[
    appRoutingProviders,
    AUTH_PROVIDERS,
    Auth,
    AuthGuard
  ]
})
export class AppModule { }
