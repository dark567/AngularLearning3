import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()

  title = ''
  text = ''

  constructor() { }

  ngOnInit(): void {
  }

  addPost() {
    if (this.text.trim() && this.title.trim()) {
      const post: Post = {
        Title: this.title,
        Text: this.text
      }

      this.onAdd.emit(post)
      // console.log('New Post:', post)
      this.title = this.text = ''
    }
  }

}
