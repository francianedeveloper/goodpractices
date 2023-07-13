import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { CommentComponent } from './components/comments/comment.component';
import { PostRoutingModule } from './post.routing.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [PostComponent, CommentComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule
  ],
})
export class PostModule {

 }

