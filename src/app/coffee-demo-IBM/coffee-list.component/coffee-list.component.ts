import { Component, EventEmitter, Input, Output, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Coffee } from '../coffee-demo-IBM-model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'coffee-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
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

    

    if(this.coffees.find(a => a.id == this.id)) {
      alert("It is duplicate ID!!!")
    } else if(this.id == "" || this.blend_name == ""){
      alert("ID/ Blend_name is empty, please update the value.")
    } else {
      this.add.emit(this.coff);
      alert("New Coffee added, ID is : " + this.id);
      this.clearModels();
    }

    
    

  }

  ngOnChanges() {
    console.log("Ng On Changes" ,this.coffees);
  }

  clearModels() {
    this.id = "";
    this.uid = "";
    this.blend_name = "";
    this.origin = "";
    this.variety = "";
    this.notes = "";
    this.intensifier = "";
  }

}