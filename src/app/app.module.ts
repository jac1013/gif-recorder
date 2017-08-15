import 'zone.js';
import 'reflect-metadata';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { AppRoutingModule } from './app-routing.module';

import { ElectronService } from './providers/electron.service';
import { CommandRunner } from './bizanz-record/command-runner.service';
import { LeftUpperCornerButton } from './left-upper-corner-button/left-upper-corner-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeftUpperCornerButton
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ElectronService, CommandRunner],
  bootstrap: [AppComponent]
})
export class AppModule {
}
