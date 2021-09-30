import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Book } from '../book-class/book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  book: Book;
  book_url = 'http://127.0.0.1:5000/api/v1/books/';

  getBooks() {
    return this.http.get('http://127.0.0.1:5000/api/v1/books');  // get all books
  }
  bookSearch(query: HTMLInputElement) {
    // let bookApi = 'https://www.googleapis.com/books/v1/volumes?q=';
    let bookApi = this.book_url + query.value;

    interface ApiResponse {
      items: any;

  }
  let promise = new Promise<void>((resolve, reject) => {
    this.http.get<ApiResponse>(bookApi).toPromise().then(response => {
      this.book = response.items;
      console.log(response.items);
      resolve();
    },
      error => {
        this.book = new Book([]);
        reject(error);
      });
  });
  return promise;
  }
  returnBook(){
    return this.book;
  }

  
  constructor(private http: HttpClient) {
    this.book = new Book([]); 
  }

}
