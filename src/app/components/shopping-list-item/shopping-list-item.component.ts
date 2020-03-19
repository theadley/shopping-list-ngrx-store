import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ShoppingListItem} from '../../models/shopping';

@Component({
  selector: 'app-shopping-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.less']
})
export class ShoppingListItemComponent {

  @Input() shoppingListItem: ShoppingListItem;
  @Output() checked = new EventEmitter<boolean>();
  @Output() removed = new EventEmitter();

  constructor() { }

  checkedChanged(event) {
    this.checked.emit(event.checked);
  }

  removeMe() {
    this.removed.emit();
  }

}
