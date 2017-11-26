import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent }  from './Components/home/home.component';
import { ProfileComponent }  from './Components/profile/profile.component';
import {CharactersComponent} from "../characters/character.component";
import { HeroeComponent } from "../hero/heroe.component";
import {AuthGuard} from './auth.guard';

const appRoutes:Routes=[
    {
        path:'',
        component:HomeComponent
    },

    {
        path:'profile',
        component:ProfileComponent,
        canActivate:[AuthGuard]
    },
     {
         path:"", 
      component: CharactersComponent
     },
    {
        path:"hero/:id", 
        component: HeroeComponent
    },
    {
        path:"**", 
        component: CharactersComponent
    }



];
export const appRoutingProviders: any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);
