import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipeLvl2 = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Hamburger',
      'So delicious, you have to have it.',
      'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg'
    ),
    new Recipe(
      'Corn',
      'Because corn can be cooked!',
      'http://drop.ndtv.com/albums/COOKS/corngallery/creolespicedcornthumb_640x480.jpg'
    )
  ];

  passOnInfo(recipe: Recipe) {
    this.selectedRecipeLvl2.emit(recipe);
  }

  constructor() { }

  ngOnInit() {
  }

}
