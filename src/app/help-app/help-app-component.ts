import { Component, OnInit } from "@angular/core";


@Component({
    selector: "help-app",
    templateUrl: "./help-app-component.html",
    styleUrls: ["./help-app-component.scss"]
})

export class HelpAppComponent implements OnInit{

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