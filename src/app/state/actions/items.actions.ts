
//import { ItemModel } from '@core/models/Item.interface';
/*import { IngresoPersona } from '../../ingresoPersona';
import { createAction, props } from '@ngrx/store'; //TODO: <----


export const loadItems = createAction(
    '[Item List] Load items' //TODO type*
);

export const loadedItems = createAction(
    '[Item List] Loaded success',
    props<{ items: IngresoPersona[] }>()
)

*/
import { createActionGroup, props } from '@ngrx/store';
//import { Book } from '../book-list/books.model';
import { IngresoPersona } from '../../ingresoPersona';
export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    'Add Book': props<{ bookId: string }>(),
    'Remove Book': props<{ bookId: string }>(),
  },
});
 
export const BooksApiActions = createActionGroup({
  source: 'Books API',
  events: {
    'Retrieved Book List': props<{ books: ReadonlyArray<IngresoPersona> }>(),
  },
});