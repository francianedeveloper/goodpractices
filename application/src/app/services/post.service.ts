import { environment } from 'src/environment/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../post/post.types';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
      console.log('rrrrrr');
      return this._http.get(`${API_URL}/posts`) as Observable<IPost[]>;
  }

}

