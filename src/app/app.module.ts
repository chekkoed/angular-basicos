import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Tarea:
//Crear un modulo llamado ContadorModule
//declaraciones y exportaciones
import { AppComponent } from './app.component';
import { heoresModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    heoresModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
