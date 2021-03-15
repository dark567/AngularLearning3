import { Component } from '@angular/core';

export interface Post {
  Title: string
  Text: string
  Id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[] = [
    { Title: 'Хочу выучить Angular components', Text: 'Я все ещё учу компоненты', Id: 1 },
    { Title: 'Следующий блок', Text: 'Будет про директивы', Id: 2 },
  ];

  updatePosts(post: Post){
    this.posts.unshift(post)
    console.log('Post', post)
  }
}
