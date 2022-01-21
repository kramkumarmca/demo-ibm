import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType, Effect } from '@ngrx/effects';
import { CoffeeDemoIBMService } from './coffee-demo-IBM.service';
import { ApiGetData, loadCoffeeSuccess, retrievedCoffeeList } from './coffee-demo-IBM-Action';
import { switchMap, catchError, map, mergeMap, tap, concatMap, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { Coffee } from './coffee-demo-IBM-model';

@Injectable()
export class RootEffects {

  /*getCoffeesEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(ApiGetData),
      tap(() => { console.log('Effect Initialized') }),
      switchMap(q => {
        return this.coffeeService.getCoffee().pipe(
          map(res => 
            {
              return loadPhotosSuccess({coffee: [res]})
            }
          ));
      }
      )
    )
  )*/

  getCoffeesEffect$ = createEffect( () => {
    return this.actions$.pipe(
      ofType(ApiGetData),
      tap(() => { console.log('Effects triggered...') }),
      switchMap(q => {
        return this.getRightObject();
      }
      )
    )
    })
    getRightObject() {
      return this.coffeeService.getNCoffee(20).pipe(
        map((res) => 
          {
            let c = <Array<Coffee>> res;
            return loadCoffeeSuccess({coffee: c})
          }
        ))
    }

  

  

  


  /*@Effect()
  getTryCoffeesEffect$ = this.actions$.pipe(
      ofType(ApiGetData),
      tap(() => { console.log('Effect Initialized') }),
      mergeMap((action) => {
        console.log('Service from Effect is running...')
        return this.coffeeService.getCoffee()
      }
    ))*/
  


  /*getAllCoffeesEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(ApiGetData),
      tap(() => { console.log('Effect Initialized') }),
      mergeMap((action) => {
        console.log('Service from Effect is running...')
        return this.coffeeService.getNCoffee(10).pipe(
          map(res => ApiSuccess(res)),
          catchError(error => of(ApiError({ error }))),
          tap(() => { console.log('Data Retrieved') })
        )
      }
      )
    )
  )*/

  


  constructor(private actions$: Actions, private coffeeService: CoffeeDemoIBMService, private store: Store) { }
}