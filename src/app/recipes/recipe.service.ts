import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) { }

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'This is simply a test',
      'https://cookingpotsnpans.com/wp-content/uploads/2020/09/london-broil.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French fries', 200)
      ]),

    new Recipe(
      'Big fat burger',
      'This is simply a test',
      'https://cookingpotsnpans.com/wp-content/uploads/2020/09/london-broil.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
