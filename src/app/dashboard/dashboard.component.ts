import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export default class DashboardComponent {

  users = signal<any[]>([{id:1}, {id: 2}, {id: 3}]);

}
