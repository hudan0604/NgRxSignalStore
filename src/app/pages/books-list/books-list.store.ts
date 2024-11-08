import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Book } from '../../shared/models/books.models';
import { computed, inject } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import {
  setPending,
  withRequestStatus,
} from '../../shared/store-features/request-status.features';

type BooksListState = {
  books: Array<Book>;
};

export const BooksListStore = signalStore(
  withState<BooksListState>({ books: [] }),
  withRequestStatus(),
  withComputed((store) => ({
    favoritesBooks: computed(() =>
      store.books().filter((book) => book.isInFavorites)
    ),
  })),
  withMethods((store, booksService = inject(BooksService)) => ({
    getBooks: rxMethod<void>(
      pipe(
        tap(() => patchState(store, setPending())),
        switchMap(() => booksService.getBooks()),
        tap((books) => patchState(store, { books }))
      )
    ),
  })),
  withHooks((store) => ({
    onInit() {
      store.getBooks();
    },
  }))
);
