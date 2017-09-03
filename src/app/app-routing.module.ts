import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaloptimaComponent } from './caloptima/caloptima.component';
import { SampleComponent } from './sample/sample.component';
import { UserPostsComponent } from './user-posts/user-posts.component';

const routes: Routes = [
  {
    path: 'caloptima',
    component: CaloptimaComponent
  },
  {
    path: 'sample',
    component: SampleComponent
  },
  {
    path: 'posts',
    component: UserPostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
