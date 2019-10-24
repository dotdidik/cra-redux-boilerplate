import * as types from '../types/penjumlahan';

export const increment = () => {
  return dispatch => {
    dispatch({
      type: types.penjumlahan.INCRENMENT
    })
  }
}

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: types.penjumlahan.DECREMENT
    })
  }
}

export const reset = () => {
    return dispatch => {
        dispatch({
            type: types.penjumlahan.RESET
        })
    }
}