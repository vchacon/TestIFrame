import { Component, OnInit } from '@angular/core';
import { UserService } from './../shared/services/user.service';
import { Post } from '../shared/post';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  posts: Post[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    // get user posts via user service
    this.userService.getPosts()
      .subscribe(response => {
        debugger;
        this.posts = response;
      });
  }

}
