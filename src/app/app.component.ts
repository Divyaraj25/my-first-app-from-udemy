import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  servers = []
  StatusForServer = ''
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
    this.servers.push(this.serverName)
    this.textContent = true
    this.StatusForServer = Math.random() < 0.5 ? 'online' : 'offline';
    this.serverStatus = "server created and server name is " + this.serverName + " and current status " + this.StatusForServer;
  }
  onInput(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }
  onReset() {
    this.serverName = ""
    this.textContent = false
  }
  getColor() {
    return this.StatusForServer === 'online' ? 'green' : 'red'
  }
}
