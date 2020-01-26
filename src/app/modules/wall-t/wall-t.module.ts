import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialogModule,
  MatButtonModule,
  MatMenuModule
} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

import { WallCenterComponent } from './wall-center/wall-center.component';
import { PostComponent } from '../../components/post/post.component';
import { WallComponent } from './wall/wall.component';
import { RouterModule } from '@angular/router';
import { HeaderWallComponent } from './header-wall/header-wall.component';
import { WallSidenavComponent } from './wall-sidenav/wall-sidenav.component';
import { WallChatComponent } from './wall-chat/wall-chat.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [PostComponent],
  declarations: [
    WallComponent,
    WallCenterComponent,
    PostComponent,
    HeaderWallComponent,
    WallSidenavComponent,
    WallChatComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    RouterModule.forChild([{ path: '', component: WallComponent }])
  ],
  exports: [RouterModule]
})
export class WallTModule {}
