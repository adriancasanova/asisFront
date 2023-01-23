/*import { ItemsState } from '../../core/models/item.state';
import { createSelector } from '@ngrx/store'; //TODO <----
import { AppState } from '../app.state';

//TODO: Es el selector que tiene relacion con la propiedad "items"

export const selectItemsFeature = (state: AppState) => state.items;//TODO: PADRE

export const selectListItems = createSelector(
    selectItemsFeature,
    (state: ItemsState) => state.items //TODO: HIJO
);

export const selectLoading = createSelector(
    selectItemsFeature,
    (state: ItemsState) => state.loading //TODO: HIJO
); */

import { createSelector, createFeatureSelector } from '@ngrx/store';
//import { Book } from '../book-list/books.model';
import { IngresoPersona } from '../../ingresoPersona';
export const selectBooks = createFeatureSelector<ReadonlyArray<IngresoPersona>>('books');
 
export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<string>
>('collection');
 
export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) => {
    return collection.map((id) => books.find((book) => book.id === id));
  }
);