import { createAction, props } from '@ngrx/store';
import { Coffee } from './coffee-demo-IBM-model';
 

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

export const ApiError = createAction(API_ERROR_ACTION, props<{ error: any }>());
export const ApiSuccess = createAction(API_SUCCESS_ACTION, props<Coffee>());