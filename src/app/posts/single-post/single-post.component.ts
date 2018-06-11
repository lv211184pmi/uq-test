import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

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
  singleCommentDoc: AngularFirestoreDocument<Post>;
  commentsObj$: Observable<Post>;

  comments: string[];
  singlePost: any;
  currentUser: any;

  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.singlePost = JSON.parse(localStorage.getItem('singlePost'));
    this.getComments();
  }

  ngOnInit() {
    this.getComments();
  }

  addComment(comment) {
    const path = `posts/${this.singlePost.key}`;
    this.singleCommentDoc = this.db.doc(path);
    this.singlePost.comments.push(comment.value);
    this.singleCommentDoc.update({ comments: this.singlePost.comments });
    comment.value = '';
  }

  getComments() {
    const pathComment = `posts/${this.singlePost.key}`;
    this.singleCommentDoc = this.db.doc(pathComment);
    this.singleCommentDoc.valueChanges().subscribe(res => {
      this.currentUser.comments = res.comments});  
  }
  
  ngOnDestroy() {
    // clean LC
    localStorage.removeItem('singlePost');
  }
}
