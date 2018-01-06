import { createStore } from 'redux';

// CONSTANTS
const CHANGE_MODE = `CHANGE_MODE`;
const CHANGE_LANGUAGE = `CHANGE_LANGUAGE`;

// ACTIONS
const changeMode = mode => {
  return { type: CHANGE_MODE, mode };
};

const changeLanguage = language => {
  return { type: CHANGE_LANGUAGE, language };
};

// STATE
const initialState = { mode: 'day', language: 'en' };

// REDUCERS
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MODE:
      return { ...state, mode: action.mode };
    case CHANGE_LANGUAGE:
      return { ...state, language: action.language };
    default:
      return state;
  }
};

// STORE
const configureStore = () =>
  process.env.NODE_ENV === 'production'
    ? createStore(reducer, initialState)
    : createStore(
        reducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      );

// const configureStore = () =>
//   createStore(
//     reducer,
//     initialState,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );

export default configureStore;
