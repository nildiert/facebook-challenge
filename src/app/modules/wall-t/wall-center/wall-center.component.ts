import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostComponent } from '../../../components/post/post.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-wall-center',
  templateUrl: './wall-center.component.html',
  styleUrls: ['./wall-center.component.css']
})
export class WallCenterComponent implements OnInit {
  name: string;
  animal: string;


  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(PostComponent, {
      width: '400px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngOnInit() {
  }

}
