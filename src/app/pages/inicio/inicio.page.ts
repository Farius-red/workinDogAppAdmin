import { Observable } from 'rxjs';
import { MenuSvcService } from './../../core/servicios/menuSvc/menu-svc.service';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { MenuModel } from 'src/app/core/modelos/menu.Model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  menu:Observable<MenuModel[]>
  constructor(private  menuSvc: MenuSvcService) { }

  ngOnInit() {
this.menu =this.menuSvc.getMenu();
console.log(this.menu);
  }

  

}
