import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


import { AppError } from './common/app.error';
import { NotFoundError } from './common/not.found.error';

@Injectable()
export class WorkerService {

  url;
  
  constructor(private httpClient: HttpClient) { 
    this.url = "https://pixel-handler-backend.herokuapp.com/pixel.gif";
  }

  firePixel(resource){
      return this.httpClient.get(this.url+'?'+this.buildQuery(Object.assign({}, resource)))
      .pipe(catchError(this.handleError));
  }

  private buildQuery(params){   
    delete params.id; 
    var queryParams = (JSON.stringify(params)).split(',').join('&');
    queryParams = queryParams.split('{').join('');
    queryParams = queryParams.split('}').join('');
    queryParams = queryParams.split('"').join('');
    queryParams = queryParams.split(':').join('=');
    return queryParams;
  }

  private handleError(error: Response){
        if(error.status === 404)
          return throwError(new NotFoundError());
        return throwError(new AppError(error));
  }

}