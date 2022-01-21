import { createAction, props } from '@ngrx/store';
import { Coffee } from './coffee-demo-IBM-model';
 
coffees: Array<Coffee>();
const API_ERROR_ACTION = '[Random] Mock API Error';
const API_SUCCESS_ACTION = '[Random] Mock API Success';


export const addCoffee = createAction(
  '[Coffee] Add Coffee',
  props<Coffee>()
);
 
export const removeCoffee = createAction(
  '[Coffee] Remove Coffee',
  props<Coffee>()
);
 
export const retrievedCoffeeList = createAction(
  '[Coffee] Retrieve Coffee',
  props<{coffee: Array<Coffee>}>()
);



export const ApiGetData = createAction("[Coffee] Get ALL API Data");



export const loadCoffeeSuccess = createAction('[Coffee] Load Coffees Success', props<{coffee: Array<Coffee>}>());