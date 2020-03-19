import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShoppingListItem} from '../../models/shopping';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.less']
})
export class ShoppingListItemComponent implements OnInit {

  @Input() shoppingListItem: ShoppingListItem;
  @Output() checked = new EventEmitter<boolean>();
  @Output() removed = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  checkedChanged(event) {
    console.log(event);
    this.checked.emit(event.checked);
  }

  removeMe() {
    console.log('Removing: ' + this.shoppingListItem.label);
    this.removed.emit();
  }

}
