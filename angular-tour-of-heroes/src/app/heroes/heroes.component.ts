import { Component } from '@angular/core';
import {Hero } from '../hero' ;
import { HeroService } from '../hero.service';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
heroes : Hero [] = [ ]
selectedHero ?: Hero ;
private heroService: HeroService;
//If 'private' is included in the 'constructor' on line 18 before 'heroService', line 13 can be removed. 

//Auto wiring
//Line 19 is included to explicitly state what line 18's constructor is doing. Line 19 doesn't affect its intention or action.
constructor ( heroService : HeroService ) {
  this.heroService = heroService ;
}
//This command happens after the constructors are called but before the page is loaded.
ngOnInit() : void {
  this.getHeroes(); 
}

onSelect (hero: Hero) {
  this.selectedHero = hero;
}

//Lines 31 and 32 could be removed if line 23 was replaced by line 32. We didn't because that isn't as clear.  
getHeroes() : void {
  this.heroService.getHeroes()
  .subscribe(heroes => this.heroes = heroes);
  }
}
