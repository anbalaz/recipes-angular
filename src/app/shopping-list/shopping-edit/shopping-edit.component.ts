import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
    @ViewChild('f', { static: false }) shoppingListForm: NgForm;
    subscription: Subscription;
    editMode = false;
    editedItemIndex: number;
    editedItem: Ingredient;

    constructor(private shoppingListService: ShoppingListService) { }

    ngOnInit(): void {
        this.subscription = this.shoppingListService.startedEditing.subscribe(
            (index: number) => {
                this.editedItemIndex = index;
                this.editMode = true;
                this.editedItem = this.shoppingListService.getIngredient(index);
                this.shoppingListForm.setValue({
                    name: this.editedItem.name,
                    amount: this.editedItem.amount
                })
            });
    }

    onSubmit(form: NgForm) {
        const value = form.value;
        const newIngredient = new Ingredient(value.name, value.amount)
        if (this.editMode) {
            this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
            this.editMode = false;
        } else {
            this.shoppingListService.addIngredient(newIngredient);
        }
        this.shoppingListForm.reset();
    }

    onClear() {
        this.editMode = false;
        this.shoppingListForm.reset();
    }

    onDelete() {
        this.shoppingListService.deleteIngredient(this.editedItemIndex);
        this.shoppingListForm.reset();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }


}
