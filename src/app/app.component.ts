import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectListItems, ShoppingState} from './store/reducers/shopping.reducer';
import {addListItem, getListItems, removeListItem, updateListItem} from './store/actions/shopping.actions';
import {Observable} from 'rxjs';
import {ShoppingListItem} from './models/shopping';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  newItemName = '';

  shoppingListItems$: Observable<ShoppingListItem[]>;

  constructor(private shoppingListStore: Store<ShoppingState>) {
  }

  ngOnInit(): void {
    this.shoppingListStore.dispatch(getListItems());
    this.shoppingListItems$ = this.shoppingListStore.pipe(select(selectListItems));
  }

  onCheckChanged(event: boolean, item: ShoppingListItem) {
    item.completed = event;
    this.shoppingListStore.dispatch(updateListItem({item}));
  }

  onRemoved(item: ShoppingListItem) {
    this.shoppingListStore.dispatch(removeListItem({item}));
  }

  addNewItem() {
    this.shoppingListStore.dispatch(addListItem({item: {label: this.newItemName, completed: false}}));
    this.newItemName = ''; // Reset the input field
  }
}
