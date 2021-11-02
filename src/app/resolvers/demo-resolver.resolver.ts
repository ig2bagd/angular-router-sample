import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Post } from '../models/post';
import { PostsService } from '../services/posts.service';

@Injectable({
  providedIn: 'root'
})
export class DemoResolverResolver implements Resolve<any> {
  constructor(private _postsService: PostsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> {
    return this._postsService.getPostLists();
  }
}
