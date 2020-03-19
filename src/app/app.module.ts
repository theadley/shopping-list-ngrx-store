import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ActionReducer, StoreModule} from '@ngrx/store';
import { reducers } from './store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatButtonModule} from '@angular/material';
import { ShoppingListItemComponent } from './components/shopping-list-item/shopping-list-item.component';
import {FormsModule} from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import {ShoppingEffects} from './store/effects/shopping.effects';
import {HttpClientModule} from '@angular/common/http';

// Meta-reducers

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListItemComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {metaReducers: [debug]}),
    EffectsModule.forFeature([ShoppingEffects]),
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
