import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

import { GeneratorComponent } from './components/generator/generator.component';
@NgModule({
  declarations: [
    AppComponent,
    GeneratorComponent
  ],

  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
