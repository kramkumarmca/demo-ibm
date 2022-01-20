import { Component, OnInit } from "@angular/core";


@Component({
    selector: "demo-app",
    templateUrl: "./demo-app-component.html",
    styleUrls: ["./demo-app-component.scss"]
})

export class DemoAppComponent implements OnInit{

    title = 'DemoApp';

  constructor() {
    let x = "sssaaa";
    console.log(x.length);
    let y = ["zasd","qwe","zzz"]
    console.log(x.charAt(0))
    console.log(y.sort())

  }

    ngOnInit(): void {
        console.log("ngOnit initiated!!!")
    }

}