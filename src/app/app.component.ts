import { Component , OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first_project';

  getMin(a, b) {
    if(a < b) {
      return a;
    }
    return b;
  }

}
