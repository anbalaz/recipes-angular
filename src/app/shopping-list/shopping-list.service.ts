import { EventEmitter, Injectable, Output } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  ingredient: Ingredient;

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() { }

  public getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  public onAddIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient)
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
