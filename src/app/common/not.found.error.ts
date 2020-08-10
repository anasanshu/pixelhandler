import { AppError } from './app.error';

export class NotFoundError extends AppError{
  get message(){ return "Not found error"; }
}