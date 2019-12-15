import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Steak','Using this recipe you can create a steak.',
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Rib Eye','Using this recipe you can create a rib eye.',
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  constructor() { }
  @Output() theRecipe = new EventEmitter<Recipe>()
  ngOnInit() {
  }
  onRecipeSelect(recipe: Recipe) {
    this.theRecipe.emit(recipe);  }

}
