import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {BookServiceService} from './book-service/book-service.service';
import {Book} from './book-class/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'Library';
  booksList = Subscription;
  books: Book[];
  constructor(private bookService: BookServiceService) { }
  ngOnInit(): void{
    this.bookService.getBooks();
    this.booksList = this.bookService.getBooks().
    subscribe(books => this.books = books),
    err => {  console.log(err);
    };
    // this.books = this.bookService.book;
    console.log(this.bookService.getBooks());
  } 
}

