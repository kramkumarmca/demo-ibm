import { createReducer, on } from '@ngrx/store';

import { retrievedCoffeeList } from './coffee-demo-IBM-Action';
import { Coffee } from './coffee-demo-IBM-model';

export const initialState: Array<Coffee> = [];

export const coffeesReducer = createReducer(
  initialState,
  on(retrievedCoffeeList, (state, {coffee} ) => coffee)
);