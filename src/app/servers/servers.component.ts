import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //esto en realidad es un selector css. Si pones [app-servers] entonces poniendo <div app-servers> como atributo hara que 
  //Angular reconozca ese div como el componente al cual se le ha de inyectar el html y el css especificados en este componente.
  //tambien funciona poniendolo como clase, rollo selector: '.app-servers' y <div class='app-servers'> 
  //el unico caso en el que no funciona es seleccionando por id.
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer=true;
  serverCreationStatus="No server was created!"
  serverName = "test server :D";
  serverCreated = false;
  servers = ["Testserver","Testserver 2"]
  
  constructor() {
    /*setTimeout(() => {
      this.allowNewServer = true; 
    },2000)*/
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created! Name is" + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement> event.target).value;
  }

}
