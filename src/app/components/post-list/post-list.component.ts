import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[];
  
  constructor(private _route: ActivatedRoute) {
    this.posts = [];
  }
  
  ngOnInit(): void {
    this.posts = this._route.snapshot.data["posts"];
  }

}
