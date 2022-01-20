import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoApp';

  constructor() {
    let x = "sssaaa";
    console.log(x.length);
    let y = ["zasd","qwe","zzz"]
    console.log(x.charAt(0))
    console.log(y.sort())

  }

}
