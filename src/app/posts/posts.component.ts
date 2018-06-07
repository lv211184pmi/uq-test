import { Component, OnInit } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private dataStorageService: DataStorageService) { 
    this.dataStorageService.getPosts()
      .subscribe(
        response => this.posts = response,
        // response => console.log(JSON.parse(response)),
        error => console.log(error)
      );
  }

  ngOnInit() {
  }

  addPost(post) {
    const singlePost = {
      "content": post,
      "comments": [],
      "id": this._generateID()
    };
    this.dataStorageService.storePosts(singlePost)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }

  private _generateID() {
    return Math.round(Math.random() * 10000);
  }
}
