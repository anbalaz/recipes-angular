import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeAway = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://cookingpotsnpans.com/wp-content/uploads/2020/09/london-broil.jpg'),
    new Recipe(
      'A Test Recipe yeah',
      'This is simply a test',
      'https://cookingpotsnpans.com/wp-content/uploads/2020/09/london-broil.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeClicked(recipeElement: Recipe) {
    this.recipeAway.emit(recipeElement);
  }
}
