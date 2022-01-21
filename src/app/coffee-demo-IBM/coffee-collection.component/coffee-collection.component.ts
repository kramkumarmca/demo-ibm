import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Coffee } from '../coffee-demo-IBM-model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'coffee-collection',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './coffee-collection.component.html',
  styleUrls: ['./coffee-collection.component.scss'],
})
export class CoffeeCollectionComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['id', 'blend_name', 'origin', 'variety', 'notes', 'intensifier', 'actions'];
  exampleDatabase = null;
  data = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator, {static: false}) 
  set paginator(value: MatPaginator) {
    this.dataSource.paginator = value;
  }
  
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  dataSource = new MatTableDataSource<Coffee>();


  @Input() coffees: Array<Coffee> = [];
  @Output() remove = new EventEmitter<Coffee>();

  constructor() {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
  }

  ngOnChanges() {
    console.log(this.coffees);
    this.dataSource = new MatTableDataSource(this.coffees);
    setTimeout(
      () => {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
       });
    
  }
 

}