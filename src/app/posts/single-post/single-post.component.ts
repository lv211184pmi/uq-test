import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';

import { Post } from '../../shared/models/post.model';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit, OnDestroy {
  postsCollection: AngularFirestoreCollection<Post>;
  singlePostDoc: AngularFirestoreDocument<Post>;

  comments: string[];
  singlePost: any;

  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore
  ) { }

  ngOnInit() {
    this.singlePost = JSON.parse(localStorage.getItem('singlePost'));
  }

  addComment(comment) {
    const path = `posts/${this.singlePost.key}`;
    this.singlePostDoc = this.db.doc(path);
    this.singlePost.comments.push(comment.value);
    this.singlePostDoc.update({comments: this.singlePost.comments});
    comment.value = '';
  }

  refreshComments() {}

  ngOnDestroy() {
    // clean LC
    localStorage.removeItem('singlePost');
  }
}
