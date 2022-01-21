import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Coffee } from '../coffee-demo-IBM-model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
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

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource<Array<Coffee>>();


  @Input() coffees: Array<Coffee> = [];
  @Output() remove = new EventEmitter<Coffee>();

  constructor() {
    this.dataSource.paginator = this.paginator;
    console.log(this.coffees)
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    setTimeout(() => this.dataSource.paginator = this.paginator, 300);
  }

 

}