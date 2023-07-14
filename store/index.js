/** LIBRARIES */
import { 
  createStore, 
  applyMiddleware 
} from "redux";
import thunk from "redux-thunk";

/** COMPONENTS */
import reducer from "../reducers";

export default createStore(reducer, applyMiddleware(thunk));

