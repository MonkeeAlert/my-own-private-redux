import React from 'react';
import { connect } from '../../morr/myOwnReactRedux';
import { timestampToDate } from '../../utils/functions';
import { removeTodo } from '../../morr/actions';

const mapStateToProps = state => ({ counter: state.counter });

const mapDispatchToProps = dispatch => {
  return {
    remove: id => dispatch(removeTodo(id))
  }
}

export const Todo = connect(mapStateToProps, mapDispatchToProps)(
  ({ title, createdAt, remove }) => (
    <li>
      {title} { timestampToDate(createdAt) }
      <button onClick={ _ => remove(createdAt)}>Remove</button>
    </li>
  )
)