import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private recipesUrl = 'https://recipe-angular-project-a0b0c-default-rtdb.europe-west1.firebasedatabase.app/recipes.json';
  constructor(private http: HttpClient,
    private recipesService: RecipeService,
    private authService: AuthService
  ) { }

  saveRecipes() {
    const recipes = this.recipesService.getRecipes();
    this.http.put(this.recipesUrl, recipes)
      .subscribe(response => {
        console.log(response);
      })
  }

  getRecipes() {

    return this.http
      .get<Recipe[]>(this.recipesUrl)
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
          });
        }),
        tap(recipes => {
          this.recipesService.setRecipes(recipes);
        })
      );
  }

}
