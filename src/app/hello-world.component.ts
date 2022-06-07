import { Component } from "@angular/core";

@Component({
    selector: 'new-app-hello-world',
    template: '<h1> {{ title }}',
    styles: [`
        h1 {
            color: blue;
        }
    `]
})

export class HelloWorldComponent {
    title = 'Hello World!  Sizram'; 
}