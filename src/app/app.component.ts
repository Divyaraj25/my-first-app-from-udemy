import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  textContent = false
  serverName = ""
  serverStatus = "server not created";
  allowButton = false;
  name = 'Divyaraj';
  id = 100;
  greet() {
    return `Hello ${this.name}`
  }
  constructor() {
    setTimeout(() => {
      this.allowButton = true
      this.name = "harit"
    }, 5000)
  }

  onServerCreated() {
    this.textContent = true
    this.serverStatus = "server created and server name is " + this.serverName;
  }
  onInput(event:Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }
  onReset(){
    this.serverName = ""
    this.textContent = false
  }
}
