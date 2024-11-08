import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/books.models';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  public getBooks(): Observable<Array<Book>> {
    return this.http.get<Array<Book>>('http://localhost:3000/books');
  }

  public getSpecificBook(id: string): Observable<Book> {
    return this.http.get<Book>('http://localhost:3000/books/1');
  }
}
