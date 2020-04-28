import axios from 'axios';
import * as actions from '../api';

// const action = {
//     type: 'apiCallBegan',
//     payload: {
//         url: '/bugs/',
//         method: 'get',
//         data: {},
//         onSuccess: 'bugReceived',
//         onError: 'apiRequestFailed'
//     }
// }
const BASE_URL = 'http://localhost:9000/api'
const api = ({dispatch}) => next => async action => {

    if (action.type !== actions.apiCallBegan.type) return next(action);
    const {url, method, data, onStart, onSuccess, onError} = action.payload
    if (onStart) dispatch({type: onStart})
    next(action);
    try {
        const response = await axios.request({
            baseURL: BASE_URL,
            url,// endppoint
            method,
            data 
        });
        dispatch(actions.apiCallSuccess(response.data));
        if (onSuccess) dispatch({type: onSuccess, payload: response.data})
    } catch(error) {
        // General
        dispatch(actions.apiCallFailed(error.message));
        // Specific
        if (onError) dispatch({type: onSuccess, payload: error.message})
    }
}

export default api