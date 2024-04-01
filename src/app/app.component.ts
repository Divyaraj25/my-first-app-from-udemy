import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  allowButton = false;
  name = 'Divyaraj';
  id = 100;
  greet(){
    return `Hello ${this.name}`
  }
  constructor(){
    setTimeout(()=>{
      this.allowButton = true
      this.name = "harit"
    },5000)
  }
}
