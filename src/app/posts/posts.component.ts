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
  editMode: boolean;

  postsCollection: AngularFirestoreCollection<Post>;
  postsList$: Observable<Post[]>;
  singlePostDoc: AngularFirestoreDocument<Post>;
  singlePost: Observable<Post>;

  // posts: Post[];

  constructor(
    // private postsService: PostsService,
    private db: AngularFirestore
  ) { }

  ngOnInit() {
    this.getPosts();
    this._getId();
    this.editMode = false;
  }

  getPosts() {
    this.postsCollection = this.db.collection<Post>('posts');
    this.postsList$ = this.db.collection('posts').snapshotChanges().map(
      concatPost => {
        return concatPost.map(
          item => {
            const data = item.payload.doc.data() as Post;
            data.key = item.payload.doc.id;
            return data;
          }
        );
      }
    );
  }

  addPost(postTitle, postContent) {
    let postDescription = this._getDescription(postContent.value);
    this.postsCollection.add({ 
      title: postTitle.value, 
      description: postDescription, 
      content: postContent.value, 
      comments: [], 
      id: this._getId()
    });
    postTitle.value = '';
    postContent.value = '';
  }

  private _generateID() {
    return Math.round(Math.random() * 10000);
  }

  currentPost(post) {
    this.postsCollection = this.db.collection('posts', ref => {
      return ref.where('id', '==', post.id)});
  }

  setCurrentPost(post){
    localStorage.setItem('singlePost', JSON.stringify(post));
  }

  private _getId() {
    let rndID = Math.random().toString(36).substr(2, 9);
    return rndID;
  }

  private _getDescription(text){
    return text.substring(0, 20) + ' ...';
  }

  editPost(post, title, content) {
    title.value = post.title;
    content.value = post.content;
    this.editMode = true;
    localStorage.setItem('hash', JSON.stringify(post.key));
  }

  updatePost(postTitle, postContent) {
    const path = 'posts/' + JSON.parse(localStorage.getItem('hash'));
    let postDescription = this._getDescription(postContent.value);
    this.singlePostDoc = this.db.doc(path);
    this.singlePostDoc.update({title: postTitle.value, content: postContent.value, description: postDescription});
    this.editMode = false;
    postTitle.value = '';
    postContent.value = '';
  }

  cancelUpdatePost(postTitle, postContent) {
    this.editMode = false;
    postTitle.value = '';
    postContent.value = '';
  }

}
