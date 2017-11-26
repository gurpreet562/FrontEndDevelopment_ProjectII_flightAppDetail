import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FlightService} from "../services/flight.service";

@Component({
    templateUrl: "/app/flight/flight.component.html"
})

export class HeroeComponent{
    flight:Object;

    constructor(private route: ActivatedRoute,
                private flightservice: FlightService,
                private router: Router){

    }

    ngOnInit(){
        let id = +this.route.snapshot.params['id'];
        this.flightservice.infoCharacter(id)
            .then(flight => this.flight = fligt);
    }
    add(){
        this.router.navigate(['/']);
    }
}
