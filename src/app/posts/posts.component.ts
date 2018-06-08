import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { Response } from '@angular/http';
import { Post } from '../shared/post.model';
import { MaterialModule } from '../shared/material.module';
// import { PostsService } from './posts.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostsComponent implements OnInit {
  postsCollection: AngularFirestoreCollection<Post>;
  postsList$: Observable<Post[]>;

  posts: Post[];

  constructor(
    // private postsService: PostsService,
    private db: AngularFirestore
  ) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postsList$ = this.db.collection('posts').snapshotChanges().map(
      concatPost => {
        return concatPost.map(
          item => {
            const data = item.payload.doc.data() as Post;
            data.id = item.payload.doc.id;
            return data;
          }
        );
      }
    );
    console.log(this.postsList$);
  }

  addPost(title, content) {
    this.postsCollection.add({ title: 'sda', description: 'sfg', content: 'sdf', comments: [], id: 'sd'});
    title.value = '';
    content.value = '';
  }

  private _generateID() {
    return Math.round(Math.random() * 10000);
  }

  currentPost(post) {
    localStorage.setItem('singlePost', JSON.stringify(post));
  }

}
