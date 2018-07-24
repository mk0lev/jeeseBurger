import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 


import { AppComponent } from './app.component';
import { MenuComponent } from '../menu/menu.component';
import { FlappyComponent } from '../flappy/flappy.component';


@NgModule({
  declarations: [
    AppComponent, MenuComponent, FlappyComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, MenuComponent, FlappyComponent]
})
export class AppModule {
 }
