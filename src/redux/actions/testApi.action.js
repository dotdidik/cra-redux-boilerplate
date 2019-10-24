import * as types from '../types/testApi.types';
import axios from 'axios';
import setup from '../../environment'

const services = setup.API_URL

export const getRequest = () => {
    return dispatch => {
        dispatch(getLoading())
        return axios.get(services)
            .then(res => {
                dispatch(getSuccess(res.data))
            })
            .catch(err => {
                dispatch(getError(err))
            })
    }
}

const getLoading = () => {
    return {
        type: types.testApi.GET_LOADING
    }
}

const getSuccess = (data) => {
    return {
        type: types.testApi.GET_SUCCESS,
        payload: data
    }
}

const getError = (data) => {
    return {
        type: types.testApi.GET_FAILED,
        payload: data
    }
}