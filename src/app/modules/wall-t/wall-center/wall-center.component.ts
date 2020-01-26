import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostComponent } from '../../../components/post/post.component';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post.model';
import { DatePipe } from '@angular/common';

export interface DialogData {
  isNew: boolean;
  post: Post;
}

@Component({
  selector: 'app-wall-center',
  templateUrl: './wall-center.component.html',
  styleUrls: ['./wall-center.component.css']
})
export class WallCenterComponent implements OnInit {
  name: string;
  dialog: string;
  matMenu: any;

  posts: Post[] = [];
  constructor(public dialog: MatDialog, private postService: PostService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open<PostComponent, DialogData>(
      PostComponent,
      {
        width: '400px',
        data: { isNew: true, post: { text: '' } }
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dialog = result;
    });
  }

  openDialogEdit(post: Post): void {
    const dialogRef = this.dialog.open<PostComponent, DialogData>(
      PostComponent,
      {
        width: '400px',
        data: { isNew: false, post }
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dialog = result;
    });
  }

  ngOnInit() {
    this.postService.getPosts().subscribe(data => {
      this.posts = data
        .map(({ payload }) => ({
          id: payload.doc.id,
          ...payload.doc.data()
        }))
        .sort(
          (a, b) =>
            a.creationDate &&
            b.creationDate &&
            !(b.creationDate instanceof Date) &&
            !(a.creationDate instanceof Date) &&
            b.creationDate.toDate().getTime() -
              a.creationDate.toDate().getTime()
        );
    });
  }

  getCreationTime(date?: any) {
    if (date) {
      let diffMs = Date.now() - date.getTime();

      const segs = 1000;
      const mins = segs * 60;
      const hours = mins * 60;
      const days = hours * 24;
      const months = days * 30.416666666666668;
      const years = months * 12;

      //calculo
      const anos = Math.floor(diffMs / years);

      diffMs = diffMs - anos * years;
      const meses = Math.floor(diffMs / months);

      diffMs = diffMs - meses * months;
      const dias = Math.floor(diffMs / days);

      diffMs = diffMs - dias * days;
      const horas = Math.floor(diffMs / hours);

      diffMs = diffMs - horas * hours;
      const minutos = Math.floor(diffMs / mins);
      const datePipe = new DatePipe('en-US');

      if (dias > 0) {
        return `${datePipe.transform(date.toJSON(), 'medium')}`;
      } else if (horas > 0) {
        return `${horas} h`;
      } else if (minutos > 0) {
        return `Hace ${minutos} minutos`;
      } else {
        return `Hace unos segundos`;
      }
    }
    return '';
  }
}
