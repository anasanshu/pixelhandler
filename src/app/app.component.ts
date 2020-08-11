import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { AppError } from './common/app.error';
import { NotFoundError } from './common/not.found.error';

import { WorkerService } from './worker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private serviceworker: WorkerService){

  }
  title = 'pixelhandler';
  
  queryParams = [
    {
      id: "primary",
      interaction: "click",
      client: "chrome",
      os_name: "android",
      x1: "facebook",
      x2: "social",
      x3: "promotionalcgn",
      landing_url: "/campaign"
    },
    {
      id: "success",
      interaction: "click",
      client: "chrome",
      os_name: "android",
      x1: "google analytics",
      x2: "social",
      x3: "marketingcgn",
      landing_url: "/campaign"
    },
    {
      id: "warning",
      interaction: "click",
      client: "chrome",
      os_name: "android",
      x1: "twilio",
      x2: "social",
      x3: "absfbadscgn",
      landing_url: "/campaign"
    }
  ]

  callServiceWorker = (id) => {
      var param = this.queryParams.find( param => param.id === id )
      console.log("Client clicked - "+param.x1);
      this.serviceworker.firePixel(param)
      .subscribe(
      (error: AppError) => {
        if(error instanceof NotFoundError){
          alert(error.message);
        }else throw error;
      });
  }


  private handleError(error: Response){
        if(error.status === 404)
          return throwError(new NotFoundError());
        return throwError(new AppError(error));
  }
}
