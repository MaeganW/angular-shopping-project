import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test', 'this is a test', 'https://en.wikipedia.org/wiki/Meal#/media/File:Floris_Claesz._van_Dyck_001.jpg');
  ];

  constructor() { }

  ngOnInit() {
  }

}
