import { Hero } from './app.hero';
import { HEROES } from './hero.data';
import { Injectable } from 'angular2/core';

@Injectable()
export class HeroService {
  getHeroes() {
    return Promise.resolve(HEROES);
  }
}
