import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler{
  handleError(error){
    // alert("Unexpected Error Occured");
    // console.log("Unexpected Error Occured : "+JSON.stringify(error));
  }
}