import {Component, Input} from 'angular2/core';
import {Hero} from 'app/app.hero';

@Component({
  selector:'hero-details',
  templateUrl:'app/app.hero-details.html'
})

export class HeroDetailsComponent{
@Input()
  hero;
}
