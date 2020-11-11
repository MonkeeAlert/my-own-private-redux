import React, { Component, useContext } from 'react';

let Store = React.createContext();

/** create store */
export const createStore = ( reducer, initialState ) => {
  let currentState = initialState;
  let listeners = [];

  const getState = () => currentState;

  const dispatch = action => {
    currentState = reducer(currentState, action)
    listeners.forEach(listener => listener())
  };
  
  const subscribe = listener => listeners.push(listener);

  return { getState, dispatch, subscribe };
}; 

//! HOOKS
/** useStore hook */
export const useStore = _ => {
  const context = useContext(Store);

  if(!context) return 0;

  return context.store;
}

/** useSelector hook */
// todo: equalityFn
export const useSelector = (selector, equalityFn) => {
  const context = useContext(Store);

  if(!context) return 0;

  return selector(context.store.getState())
}

/** useDispatch hook  */
export const useDispatch = _ => {
  const context = useContext(Store);

  if(!context) return () => {};

  return context.store.dispatch
}

/** Provider */
export const Provider = ({ store, context = React.createContext(), children }) => {
  Store = context;
  window.store = store;

  return (
    <Store.Provider value={{ store }}>
      { children }
    </Store.Provider>
  )
}

/** connect() */
export const connect = (mapStateToProps, mapDispatchToProps = () => {}) =>  
  ConnectedComponent => {
    class ConnectedToStore extends Component {
      componentDidMount() {
        window.store.subscribe( this.handleChange );
      }

      handleChange = () => this.forceUpdate()

      render() {
        return(
          <ConnectedComponent 
              {...this.props}
              { ...mapStateToProps(window.store.getState(), this.props) } 
              { ...mapDispatchToProps(window.store.dispatch, this.props) }
          />
        )
      };
    }

  ConnectedToStore.contextType = Store;
  return ConnectedToStore;
}