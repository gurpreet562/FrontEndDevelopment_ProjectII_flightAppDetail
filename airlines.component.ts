import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MarvelService } from "../services/marvel.service";

@Component({
    selector:"super-heroe",
    templateUrl: '/app/characters/characters.component.html',
})

export class CharactersComponent implements OnInit{
    heroes:Array<Object>;
    rounded: Boolean = true;

    constructor(private airlineservice: AirLineService,
                private router: Router){
    }

    listHeroes(){
        this.airlineservice.airlineCharacters()
            .then(airlines => this.airlines = airlines);
    }

    ngOnInit(){
        this.listAirlines();

    }

    clickHero(hero){
        this.router.navigate(['/airlines'], airlines.id)
    }
}
