import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { AppError } from './common/app.error';
import { NotFoundError } from './common/not.found.error';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient){

  }
  title = 'pixelhandler';
  imageUrl = "https://i1.wp.com/www.writefordemocracy.in/wp-content/uploads/2020/07/ghandi-02.jpg";
  image="";

  consoleLog = () => {
    console.log("Logged into  the console");
  }

  requestImage = () => {
    console.log("Requesting image");
    return this.http.get(this.imageUrl, { responseType: 'arraybuffer' })
    .subscribe(
      image => this.image,
      (error: Response) => {
        if(error instanceof NotFoundError){
          alert(error.message);
        }else throw error;
      }
    )
    // .pipe(
    //   map((data: any) => {

    //     console.log("data = ", data);
    //     this.image = data;
    //   }),
    //   catchError(this.handleError)
    // );
  }

  private handleError(error: Response){
        if(error.status === 404)
          return throwError(new NotFoundError());
        return throwError(new AppError(error));
  }
}
