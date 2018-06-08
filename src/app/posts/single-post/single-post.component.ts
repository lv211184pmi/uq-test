import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit, OnDestroy {
  id: number;

  singlePost: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );

    this.singlePost = JSON.parse(localStorage.getItem('singlePost'));
  }

  ngOnDestroy() {
    // clean LC
    localStorage.removeItem('singlePost');
  }
}
