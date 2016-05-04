import {Component, OnInit} from 'angular2/core';
import {Hero} from './app.hero';
import {HeroDetailsComponent} from './app.hero-details';
import {HeroService} from './hero.service';


@Component({
  selector: 'my-hero',
  templateUrl:'app/heroes.component.html',
  directives:[HeroDetailsComponent],
  providers: [HeroService]
})

export class HeroesComponent {
  title='First-App';
  heroes: Hero[];
  selectedHero;
  onSelect(hero: Hero) { this.selectedHero = hero; }
  constructor(private _heroService: HeroService) { }
  getHeroes() {
    //this._heroService.getHeroes().then(heroes1 => this.heroes = heroes1);
  }
  ngOnInit() {
    this.getHeroes();
  }
}




