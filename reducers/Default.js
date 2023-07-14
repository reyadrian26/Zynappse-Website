import { DEFAULT } from "actions/ActionTypes";

const initialState = {
  isInitialize: false
};

export default (state = initialState, action) => {

  switch (action.type) {
    case DEFAULT:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
