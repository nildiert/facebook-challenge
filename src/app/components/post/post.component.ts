import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/modules/wall-t/wall-center/wall-center.component';
import { FirebaseDatabase } from '@angular/fire';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<PostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    // public db: FirebaseDatabase
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  // save(): void {
  //   this.db
  //     .collection('cities')
  //     .doc('LA')
  //     .set({
  //       name: 'Los Angeles',
  //       state: 'CA',
  //       country: 'USA'
  //     })
  //     .then(() => {
  //       console.log('Document successfully written!');
  //     })
  //     .catch(error => {
  //       console.error('Error writing document: ', error);
  //     });
  // }

  ngOnInit() {}
}
