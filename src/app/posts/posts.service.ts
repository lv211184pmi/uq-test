import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';

import { Post } from '../shared/models/post.model';

@Injectable()
export class PostsService {
  postsCollection: AngularFirestoreCollection<Post>;
  posts: Post[];

  constructor(private db: AngularFirestore) { }









  // getPosts() {
  //   this.postsCollection = this.db.collection('posts');
  //   this.postsCollection.valueChanges().subscribe(res => {
  //     this.posts = res;
  //   });
  //   return this.posts;
  // }

  // setSinglePost(post) {
  //   localStorage.setItem('singlePost', JSON.stringify(post));
  // }








}
