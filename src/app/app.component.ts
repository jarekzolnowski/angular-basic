import { Component, OnInit } from '@angular/core';

export type Post = Readonly<{
  id: number;
  title: string;
  body: string;
}>;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  posts: Post[];

  ngOnInit(): void {
    this.posts = [
      {
        id: 1,
        title: 'Sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'Quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto'
      },
      {
        id: 2,
        title: 'Qui est esse',
        body: 'Est rerum tempore vitae\\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\\nqui aperiam non debitis possimus qui neque nisi nulla'
      }
    ]
  }

  addPost(post: Post): void {
    this.posts = [post, ...this.posts];
  }
}

