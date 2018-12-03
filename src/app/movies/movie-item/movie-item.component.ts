import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() title: string;
  @Input() time: string;
  @Input() cover: string;
  @Input() rating: number;
  @Input() favorite: boolean;

  private stars: Array<number>;

  constructor() { }

  ngOnInit() {
    this.stars = Array(this.rating).fill(1);
  }

  toggleFavorite() {
    this.favorite = !this.favorite;
  }

}
