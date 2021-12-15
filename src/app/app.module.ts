import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {SelectButtonModule} from 'primeng/selectbutton';
import {SliderModule} from 'primeng/slider';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResultTableComponent } from './result-table/result-table.component';
import { FormComponent } from './form/form.component';
import { GraphComponent } from './graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResultTableComponent,
    FormComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SelectButtonModule,
    SliderModule,
    ButtonModule,
    ToastModule,
    BrowserAnimationsModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
