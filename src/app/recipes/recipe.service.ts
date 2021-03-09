import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://cookingpotsnpans.com/wp-content/uploads/2020/09/london-broil.jpg'),
    new Recipe(
      'A Test Recipe yeah',
      'This is simply a test',
      'https://cookingpotsnpans.com/wp-content/uploads/2020/09/london-broil.jpg')
  ];

  getRecipe(): Recipe[] {
    return this.recipes.slice();
  }
}
