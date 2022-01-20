import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Coffee } from '../coffee-demo-IBM-model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.scss'],
})
export class CoffeeListComponent implements OnInit{
  @Input() coffees: Array<Coffee> = [];
  @Output() add = new EventEmitter<Coffee>();

  coff: Coffee = {
    id: "",
    uid: "",
    blend_name: "",
    origin: "",
    variety: "",
    notes: "",
    intensifier: ""
  };

  id = "";
   uid = "";
    blend_name = "";
    origin = "";
    variety = "";
    notes = "";
    intensifier = "";

  constructor() {
    
  }

  ngOnInit() {
    /*this.coff.id = "";
    this.coff.uid = "";
    this.coff.blend_name = "";
    this.coff.origin = "";
    this.coff.variety = "";
    this.coff.notes = "";
    this.coff.intensifier = "";
    */
  }

  gv($event) {
    console.log($event);
  }

  addList() {

    this.coff.id = this.id;
    this.coff.uid = this.uid;
    this.coff.blend_name = this.blend_name;
    this.coff.origin = this.origin;
    this.coff.variety = this.variety;
    this.coff.notes = this.notes;
    this.coff.intensifier = this.intensifier;

    this.add.emit(this.coff)

  }

}