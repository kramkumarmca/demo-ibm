import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
 
import { of, Observable, forkJoin, observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Coffee } from './coffee-demo-IBM-model';
import { coffeesReducer } from './coffee-demo-IBM-reducer';
import { delay } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class CoffeeDemoIBMService {
  constructor(private http: HttpClient) {}
 
  getCoffees() {
    return this.http
      .get<Array<Coffee>>(
        'https://random-data-api.com/api/coffee/random_coffee'
      )
      .pipe(map((coffees) => [coffees] || []));
  }

  getNCoffee(n) {


    let response1 = [];

    for(let i=0;i<n;i++) {
      response1.push(this.http.get<Coffee>('https://random-data-api.com/api/coffee/random_coffee').pipe());
    }

    return forkJoin(response1);

  }

  getCoffee() {

    
   /* const response1 = this.http.get<Coffee>('https://random-data-api.com/api/coffee/random_coffee').pipe();
    const response2 = this.http.get<Coffee>('https://random-data-api.com/api/coffee/random_coffee').pipe();
    const response3 = this.http.get<Coffee>('https://random-data-api.com/api/coffee/random_coffee').pipe();
    const response4 = this.http.get<Coffee>('https://random-data-api.com/api/coffee/random_coffee').pipe();
    const Observable = [response1, response2, response3,response4];

    return forkJoin(observable);
    */
    return this.http
      .get<Coffee>(
        'https://random-data-api.com/api/coffee/random_coffee'
      )
      .pipe();
  }

}