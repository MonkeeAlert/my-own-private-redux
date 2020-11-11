import { createStore } from './myOwnReactRedux';
import { rootReducer } from './reducer';

const initialState = { 
  todos: [
    { title: 'make a sandwich', id: Date.now()}
  ]
}

export const store = createStore(rootReducer, initialState);