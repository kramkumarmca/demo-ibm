
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Coffee } from './coffee-demo-IBM-model';
 
export const getSelectedData = createFeatureSelector<Coffee>('coffee');

export const selectCoffees = createFeatureSelector<Array<Coffee>>('coffees');
 
export const selectCollectionState = createFeatureSelector<
  Array<Coffee>
>('collection');
 
export const selectCoffeeCollection = createSelector(
  selectCoffees,
  selectCollectionState,
  (coffees, collection) => {
    return collection;
  }
);



export const getStateSelectedData = createSelector(
  getSelectedData,
  (state: Coffee) => state,
  getSelectedData
);