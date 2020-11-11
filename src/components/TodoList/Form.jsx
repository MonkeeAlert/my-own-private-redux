import React, { useRef } from 'react';
import { List } from './List';
import { Input } from './Input';
import { AddTodoButton } from './AddTodoButton';

import { useDispatch } from '../../morr/myOwnReactRedux';
import { addTodo } from '../../morr/actions';
import { getPlaceholder } from '../../utils/functions';

export const Form = _ => {
  const dispatch = useDispatch();
  const input = useRef();

  const handleSubmit = e => {
    e.preventDefault();

    if(input.current.value !== '') {
      const o = { title: input.current.value, id: Date.now() }
      dispatch(addTodo(o))

      input.current.value = '';
      input.current.placeholder = getPlaceholder();
    }
  };

  return(
    <form onSubmit={handleSubmit}>
      <Input ref={input} placeholder={ getPlaceholder() }/>
      <List />
      <AddTodoButton title="Add Todo" />    
    </form> 
  )
}