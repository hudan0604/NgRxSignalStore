import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BooksListStore } from './books-list.store';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [],
  providers: [BooksListStore],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksListComponent {
  readonly store = inject(BooksListStore);
}
