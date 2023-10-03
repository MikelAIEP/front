import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class PagesModule { }
