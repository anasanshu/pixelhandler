import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppErrorHandler } from './common/app.error.handler';
import { HttpClientModule } from '@angular/common/http';
import { WorkerService } from './worker.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/service-worker.js', { enabled: environment.production }),
    HttpClientModule
  ],
  providers: [
    {provide: ErrorHandler, useClass: AppErrorHandler},
    WorkerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
