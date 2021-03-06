import { Component, OnInit } from "@angular/core";
import { Store, select } from '@ngrx/store';
 
import { selectCoffeeCollection, selectCoffees } from './coffee-demo-IBM-Selectors';
import { Coffee } from './coffee-demo-IBM-model';
import {
  retrievedCoffeeList,
  addCoffee,
  removeCoffee,
  ApiGetData,
} from './coffee-demo-IBM-Action';
import { CoffeeDemoIBMService } from './coffee-demo-IBM.service';
import { forkJoin, Observable } from "rxjs";

@Component({
    selector: "coffee-app",
    templateUrl: "./coffee-demo-IBM.component.html",
    styleUrls: ["./coffee-demo-IBM.component.scss"]
})

export class CoffeeDemoIBMComponent implements OnInit{
    cfe:Coffee;
    coffees$ = this.store.select(selectCoffees);
    coffeeCollection$ = this.store.select(selectCoffeeCollection);



  onAdd(coffee: Coffee) {
    this.store.dispatch(addCoffee(coffee));
  }
 
  onRemove(coffee: Coffee) {
    this.store.dispatch(removeCoffee(coffee));
  }
 
  constructor(
    private coffeesService: CoffeeDemoIBMService,
    private store: Store
  ) {
  }

  
 
  ngOnInit() {

    this.store.dispatch(ApiGetData());
    

    
   /* 
    this.coffeesService.getNCoffee(10).subscribe((res) => {
      reslts = reslts.concat(res);
        this.store.dispatch(retrievedCoffeeList({coffee: reslts}))
        for(let j=0; j<reslts.length; j++) {
          this.store.dispatch(addCoffee(reslts[j]))
        }
    }, err => { console.log(err); });
    */
    


    /*for(let i=0; i<5; i++) {
      console.log("Im");
      this.store.dispatch(ApiGetData());
      console.log(this.ccc$)
      this.ccc$.subscribe(s => 
        console.log(s)
      )
      if(i==0)
        this.store.dispatch(retrievedCoffeeList({coffee: []}))
      //this.store.dispatch(addCoffee())
    }*/
    
    
    /*for(let i=0; i<20; i++) {
      allService.push(this.coffeesService.getCoffee());
    }

    forkJoin(allService)
      .subscribe((res) => {
        reslts = reslts.concat(res);
        this.store.dispatch(retrievedCoffeeList({coffee: reslts}))
        for(let j=0; j<reslts.length; j++) {
          this.store.dispatch(addCoffee(reslts[j]))
        }
        
      }, err => { console.log(err); });
      */
      
      /*for(let i=0;i<10;i++) {
        this.coffeesService
        .getCoffee()
        .subscribe((res) => 
        {
          console.log(res);
          if(i==0)
            this.store.dispatch(retrievedCoffeeList({coffee: [res]}))
          this.store.dispatch(addCoffee(res))
        }
        );
      }*/

      
      


  }




  

}