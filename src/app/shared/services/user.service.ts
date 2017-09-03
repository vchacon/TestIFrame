import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

import { Post } from '../post';

@Injectable()
export class UserService {
  private posts: Array<Post>;
  private url: 'https://my-json-server.typicode.com/typicode/demo/posts';

  constructor(private http: Http) { }

  getPosts(): Observable<Post[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map( response => {
        debugger;
        console.log(response);
        return <Post[]>response.json();
      });
  }

}
