import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DemoAppComponent } from './demo/demo-app-component';
import { HelpAppComponent } from './help-app/help-app-component';
import { CoffeeDemoIBMComponent } from './coffee-demo-IBM/coffee-demo-IBM.component';

const routes: Routes = [

    {
        path: '',
        component: AppComponent,
        children: [{
            path: "",
            component: DemoAppComponent
            }
        ]
    },
    {
        path: 'demo',
        component: DemoAppComponent
    },
    {
        path: 'coffee-demo',
        component: CoffeeDemoIBMComponent
    },
    {
        path: 'help',
        component: HelpAppComponent
    }


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}