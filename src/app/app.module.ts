import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { DemoAppComponent } from '../app/demo/demo-app-component';
import { HelpAppComponent } from '../app/help-app/help-app-component';
import { FormsModule } from '@angular/forms';

import { coffeesReducer } from './coffee-demo-IBM/coffee-demo-IBM-reducer';
import { collectionReducer } from './coffee-demo-IBM/coffee-demo-IBM-Collection.reducer';
import { StoreModule } from '@ngrx/store';

import { CoffeeDemoIBMComponent } from './coffee-demo-IBM/coffee-demo-IBM.component';
import { CoffeeListComponent } from './coffee-demo-IBM/coffee-list.component/coffee-list.component';
import { CoffeeCollectionComponent } from './coffee-demo-IBM/coffee-collection.component/coffee-collection.component';

import { CoffeeDemoIBMService } from './coffee-demo-IBM/coffee-demo-IBM.service';

import { AppComponent } from './app.component';

import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import { MatButtonModule } from  '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { RootEffects } from './coffee-demo-IBM/coffee-demo.effects';

@NgModule({
  declarations: [
    AppComponent,
    DemoAppComponent,
    CoffeeDemoIBMComponent,
    CoffeeListComponent,
    CoffeeCollectionComponent,
    HelpAppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ coffees: coffeesReducer, collection: collectionReducer }),
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([RootEffects]),
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
