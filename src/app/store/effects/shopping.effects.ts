import {Injectable} from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import {ShoppingListService} from '../../services/shopping-list.service';
import {getListItems, getListItemsComplete} from '../actions/shopping.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';


@Injectable()
export class ShoppingEffects {

  // '[Shopping] GetListItems'
  getListItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getListItems),
      mergeMap(action =>
        this.shoppingListService.loadShoppingList().pipe(
          map(response => {
            return getListItemsComplete({ items: response['shoppingListItems'] });
          }),
          catchError(err => {
            console.error(err);
            return EMPTY;
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private shoppingListService: ShoppingListService
  ) {}
}
