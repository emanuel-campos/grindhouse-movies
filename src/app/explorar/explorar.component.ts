import { Component, OnInit } from '@angular/core';

import { FEATUREDMOVIES } from '../mocks/featured-movies';
import { MOSTVIEWEDMOVIES } from '../mocks/most-viewed-movies';

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.component.html',
  styleUrls: ['./explorar.component.scss']
})
export class ExplorarComponent implements OnInit {
  featuredMovies = FEATUREDMOVIES;
  mostViewedMovies = MOSTVIEWEDMOVIES;

  constructor() { }

  ngOnInit() {
  }

}
