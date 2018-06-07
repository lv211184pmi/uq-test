import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { PostsService } from './../posts/posts.service';

@Injectable()
export class DataStorageService {
    constructor(
        private http: Http, 
        private postsService:PostsService
    ) {}

    storePosts(post) {
        return this.http.post('https://upquodeposts.firebaseio.com/posts.json', post);
    }

    getPosts() {
        return this.http.get('https://upquodeposts.firebaseio.com/posts.json');
    }
}