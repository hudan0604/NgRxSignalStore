import { Routes } from '@angular/router';
import { BooksListComponent } from './pages/books-list/books-list.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'books' },
  { path: 'books', component: BooksListComponent },
];
