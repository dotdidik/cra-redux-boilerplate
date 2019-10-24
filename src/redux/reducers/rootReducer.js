import { combineReducers } from 'redux';
import penjumlahan from './penjumlahan';
import dataReducer from './testApi.reducer'
export default combineReducers({
  penjumlahan,
  data:dataReducer
});