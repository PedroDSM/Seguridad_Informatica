import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
   {
        path: 'panel',
        component:PanelComponent,
        children:[
        {
            path:'posts',
            component:PostsComponent,
        }]
    },
    {
      path:'**',
      redirectTo:'panel',
      pathMatch:'full'
    }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
