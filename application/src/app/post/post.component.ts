import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PostService } from '../services/post.service';
import { finalize } from 'rxjs';
import { ICommentPost, IPost } from './post.types';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CommentComponent } from './components/comments/comment.component';
import { MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})

export class PostComponent  implements OnInit , AfterViewInit{
  arrayPosts: IPost[] = [];
  displayedColumns: string[] = ['idPost', 'idUser', 'titlePost', 'describePost','comments'];
  dataSource: MatTableDataSource<IPost> = new MatTableDataSource<IPost>();
  resultsLength: number = 0;
  loading = true;

  @ViewChild(MatPaginator, {static: false})
  set paginator(value: MatPaginator) {
    if (this.dataSource){
      this.dataSource.paginator = value;
    }
  }
  
  constructor(
    private _postService: PostService,
    public dialog: MatDialog
  ) {

  }
  
  ngOnInit(): void {    
    this._getPosts();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(idPost: number) {
    const comments: ICommentPost[] | undefined = this.arrayPosts.find((e)=> e.idPost === idPost)?.comments;
    const dialogRef = this.dialog.open(CommentComponent,  {width: '80%',data: { comments: comments }, panelClass: 'custom-modalbox'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  private _getPosts(): void {
    this._postService
    .getPosts()
    .pipe(finalize(() => (this.loading = false)))
    .subscribe({
        next: (res: IPost[]) => {
          this.dataSource = new MatTableDataSource<IPost>(res);
          this.resultsLength = res.length;
          this.arrayPosts = res;
        },
        error: console.error,
    });
  }

}
