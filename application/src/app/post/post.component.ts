import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { finalize } from 'rxjs';
import { IPost } from './post.types';

@Component({
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})

export class PostComponent  implements OnInit {
 
  loading = true;
  posts: IPost[] = [];

  constructor(
    private _postService: PostService,
  ) {}
  
  ngOnInit(): void {    
    this._postService
        .getPosts()
        .pipe(finalize(() => (this.loading = false)))
        .subscribe({
            next: (res) => {
              console.log(res);
                this.posts = res;
            },
            error: console.error,
        });
  }

}
