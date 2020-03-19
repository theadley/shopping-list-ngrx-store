import {ShoppingListItem} from '../../models/shopping';
import {addListItem, getListItems, getListItemsComplete, removeListItem, updateListItem} from '../actions/shopping.actions';
import {Action, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';

export interface ShoppingState {
  isLoading: boolean;
  shoppingListItems: ShoppingListItem [];
}

export const initialState: ShoppingState = {
  isLoading: false,
  shoppingListItems: []
};

const shoppingListReducer = createReducer(
  initialState,
  on(getListItems, state => ({...state, isLoading: true})),
  on(getListItemsComplete, (state, { items }) => ({
    ...state,
    isLoading: false,
    shoppingListItems: [...state.shoppingListItems, ...items]
  })),
  on(addListItem, (state, { item }) => ({
    ...state,
    shoppingListItems: [...state.shoppingListItems, item]
  })),
  on(updateListItem, (state, { item }) => {
    const tempList = state.shoppingListItems.map(listItem => listItem.label === item.label ? item : listItem);
    return {
    ...state,
      shoppingListItems: [...tempList]
    };
  }),
  on(removeListItem, (state, { item }) => {
    const tempList = state.shoppingListItems.filter(listItem => listItem.label !== item.label);
    return {
    ...state,
      shoppingListItems: [...tempList]
    };
  })
);

// Export the reducers to the module for use in app.module.ts
export function reducer(state: ShoppingState | undefined, action: Action) {
  return shoppingListReducer(state, action);
}

// Selectors
// Provide the view into the pieces of the state required for the view

export const selectFeature = createFeatureSelector<any, ShoppingState>('shoppingList');

export const selectIsLoading = createSelector(
  selectFeature,
  (state: ShoppingState) => state.isLoading
);

export const selectListItems = createSelector(
  selectFeature,
  (state: ShoppingState) => state.shoppingListItems
);
