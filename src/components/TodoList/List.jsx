import React from 'react';
import { connect, useSelector } from '../../morr/myOwnReactRedux';
import { Todo } from './Todo';

const mapStateToProps = state => ({ todos: state.todos });

export const List = connect( mapStateToProps )(
  _ => {
    const todos = useSelector(state => state.todos);

    return(
      <ul>
        {
          todos.map( t => {
            const { id, title } = t;

            return <Todo key={id} title={title} createdAt={id} />
          })
        }
      </ul>
    )
  }
)