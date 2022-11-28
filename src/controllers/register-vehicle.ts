import { MissingFormalParameter } from '../errors/client-error';
import { HttpResponse, HttpRequest } from './../interfaces/http-interface';

export class RegisterVehicle {
  handle = (httpRequest: HttpRequest): HttpResponse => {
    const requireFields = ['name', 'model', 'year', 'color'];

    for (const field of requireFields) {
      if (!httpRequest.body[field]) {
        return {
          statusCode: 400,
          body: new MissingFormalParameter(`${field}`)
        };
      }
    }

    return {
      statusCode: 200,
      body: 'ok'
    };
  };
}
