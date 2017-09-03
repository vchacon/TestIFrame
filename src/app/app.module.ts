import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaloptimaComponent } from './caloptima/caloptima.component';
import { SampleComponent } from './sample/sample.component';
import { SafePipe } from './safe-pipe/safe-pipe.pipe';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { UserService } from './shared/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    CaloptimaComponent,
    SampleComponent,
    SafePipe,
    UserPostsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
