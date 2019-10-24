import * as types from '../types/penjumlahan';

const initialState = {
    value: 0
}

export default function penjumlahan(state = initialState, action) {
  switch (action.type) {
    case types.penjumlahan.INCRENMENT:
      return {
        ...state,
        value: state.value +1
      }

    case types.penjumlahan.DECREMENT:
      return {
        ...state,
        value: state.value - 1
      }
    case types.penjumlahan.RESET:
      return {
        ...state,
        value: 0
      }

    default:
      return initialState
  }
}