import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from './app.component';

@Component({
  selector: 'post-list-component',
  templateUrl: 'post-list.component.html'
})

export class PostListComponent {
  @Input() posts: Post[];
  @Output() adding: EventEmitter<Post> = new EventEmitter<Post>();

  public postToAdd: Post = {
    id: 3,
    title: 'Eum et est occaecati',
    body: 'ullam et saepe reiciendis voluptatem adipisci\\nsit amet autem assumenda provident rerum culpa\\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\\nquis sunt voluptatem rerum illo velit'
  };

  addPost(post: Post): void {
    this.adding.emit(post);
  }
}
