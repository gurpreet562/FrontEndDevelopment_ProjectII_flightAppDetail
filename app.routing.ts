import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AddComponent }  from './Components/add/add.component';
import {DetailComponent }  from './Components/detail/detail.component';
import {CharactersComponent} from "../characters/character.component";
import { HeroeComponent } from "../hero/heroe.component";
import {AuthGuard} from './auth.guard';

const appRoutes:Routes=[
    {
        path:'',
        component:AddComponent
    },

    {
        path:'detail',
        component:DetailComponent,
        canActivate:[AuthGuard]
    },
     {
         path:"", 
      component: StatusComponent
     },
    {
        path:"arrival/:id", 
        component: ArrivalComponent
    },
    {
        path:"**", 
        component:AddComponent
    }



];
export const appRoutingProviders: any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);
