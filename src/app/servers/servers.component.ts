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

  allowNewServer=false;
  
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true; 
    },2000)
   }

  ngOnInit(): void {
  }

}
