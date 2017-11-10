import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../common/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('buns', 6),
    new Ingredient('lettuce', 1)
  ];

  constructor() { }

  ngOnInit() {
  }

  // the following function DOES work although linter says otherwise
  // console logs the new array
  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
