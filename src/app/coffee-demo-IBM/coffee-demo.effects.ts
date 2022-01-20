import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { CoffeeDemoIBMService } from './coffee-demo-IBM.service';
import { ApiGetData, ApiError, ApiSuccess } from './coffee-demo-IBM-Action';
import { switchMap, catchError, map, mergeMap, tap, concatMap, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class RootEffects {

  
  getCoffeesEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(ApiGetData),
      tap(() => { console.log('new getMockDataEffect occurred in queue') }),
      mergeMap((action) => {
        console.log('Service from Effect is running...')
        return this.coffeeService.getCoffee().pipe(
          map(res => ApiSuccess(res)),
          catchError(error => of(ApiError({ error }))),
          tap(() => { console.log('Data Retrieved') })
        )
      }
      )
    )
  )


  /*getAllCoffeesEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(ApiGetData),
      tap(() => { console.log('new getMockDataEffect occurred in queue') }),
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

  


  constructor(private actions$: Actions, private coffeeService: CoffeeDemoIBMService) { }
}