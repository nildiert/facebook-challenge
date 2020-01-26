import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/modules/wall-t/wall-center/wall-center.component';
import { FirebaseDatabase } from '@angular/fire';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public text: string;
  public post: Post;
  public isNew = true;

  public title: string;

  constructor(
    public dialogRef: MatDialogRef<PostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, // public db: FirebaseDatabase,
    private postService: PostService
  ) {
    const { post } = data;
    this.post = post;
    this.text = post.text;
    this.isNew = data.isNew;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  async save(): Promise<void> {
    if (this.isNew) {
      this.title = "Publicar"
      await this.postService.createPost({
        text: this.text,
        creationDate: new Date()
      });
    } else {
      this.title = "Editar"
      await this.postService.updatePost({
        // https://www.codingame.com/playgrounds/7998/es6-tutorials-spread-operator-with-fun
        ...this.data.post,
        text: this.text
      });
    }
    this.dialogRef.close();
  }

  ngOnInit() {}
}
