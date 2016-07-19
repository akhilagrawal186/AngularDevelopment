import { Component, provide } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
  })
  const routes: RouterConfig = [
  { path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true }
]
export class AppComponent { 
public menuItems = [
    { caption: 'Dashboard', link: ['Dashboard'] },
    { caption: 'Characters', link: ['Dashboard'] },
    { caption: 'Vehicles', link: ['Dashboard'] }
  ];
}