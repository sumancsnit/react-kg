import { createStore } from 'redux';

const initialState = {
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        users: action.data,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
