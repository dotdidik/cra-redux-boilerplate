import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

// export const configureStore = createStore(
//     rootReducer, 
//     composeWithDevTools(applyMiddleware(thunk)
// ));

const configureStore = initialState => {
    return createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(thunk))
    )
  }
  
export default configureStore
  