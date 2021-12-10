import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ 
     HeaderComponent,
     FooterComponent,
     LoginComponent,
     RegistroComponent,
    ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,
  ]
})
export class ComponentesModule { }
