import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { PanelComponent } from './panel/panel.component';
import { PostsComponent } from './posts/posts.component';
import { MatSidenavModule }from '@angular/material/sidenav';
import { MatIconModule }from '@angular/material/icon';
import { MatListModule }from '@angular/material/list';
import { MatToolbarModule }from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PanelComponent, PostsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    MatDividerModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
    MatGridListModule,
  ]
})
export class DashboardModule { }
