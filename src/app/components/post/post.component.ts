import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/modules/wall-t/wall-center/wall-center.component';
import { FirebaseDatabase } from '@angular/fire';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public text: string;
  constructor(
    public dialogRef: MatDialogRef<PostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, // public db: FirebaseDatabase,
    private postService: PostService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  async save(): Promise<void> {
    await this.postService.createPost({
      text: this.text,
      creationDate: new Date()
    });
  }

  ngOnInit() {}
}
