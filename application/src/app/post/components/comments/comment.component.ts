import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICommentPost } from '../../post.types';

interface DialogData {
  comments: ICommentPost[];
}

@Component({
  selector: 'ax4b-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {

  loading = true;

  constructor(
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
      public dialogRef: MatDialogRef<CommentComponent>,
  ) {}
}
