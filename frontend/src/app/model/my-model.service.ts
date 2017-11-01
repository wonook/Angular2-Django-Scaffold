import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {MyModel} from "./my-model";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MyModelService {
  private myModelUrl = '/api/mymodel';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getMyModels(): Promise<MyModel[]> {
    return this.http.get(this.myModelUrl)
      .toPromise()
      .then(response => response.json() as MyModel[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
