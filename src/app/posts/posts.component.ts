import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Response } from '@angular/http';

import { MaterialModule } from '../shared/material.module';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostsComponent implements OnInit {
  fullPosts: any[];
  posts: any[];
  constructor(
    private dataStorageService: DataStorageService
  ) {
  }

  ngOnInit() {
    this.getPosts();
  }

  addPost(title: HTMLInputElement, content: HTMLInputElement) {
    const singlePost = {
      'title': title.value,
      'description': `${content.value.substring(1, 40)} ...`,
      'content': content.value,
      'comments': [],
      'id': this._generateID()
    };
    this.dataStorageService.storePosts(singlePost)
      .subscribe(
        error => console.log(error)
      );
    title.value = '';
    content.value = '';
    // not work this.getPosts();
  }

  getPosts() {
    this.posts = [];
    this.fullPosts = [];
    this.dataStorageService.getPosts()
      .subscribe(
        (posts) => {
          for (let singlePost in posts) {
            this.posts.push({
              ...posts[singlePost],
              key: singlePost
            });
          };
        },
        error => console.log(error)
      );
  }

  private _generateID() {
    return Math.round(Math.random() * 10000);
  }
}
