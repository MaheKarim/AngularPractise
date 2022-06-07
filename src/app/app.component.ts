import { Component , OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'first_project';

  intervalSub; 

  ngOnInit(): void {
    this.intervalSub = setInterval(() => {
      console.log('Hello From Onit');
    }, 1000);
  }

  ngOnDestroy(): void {
    if(this.intervalSub) {
      clearInterval(this.intervalSub);
    }
  }
}
