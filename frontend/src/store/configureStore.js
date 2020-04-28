import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
// {reducer} if function is no keyword 'export default' from source file
import reducer from './reducer';
import logger from './middleware/logger'
import errorlog from './middleware/errorlog'
// import func from './middleware/fun'
import api from './middleware/api'
 
export default function () {
    return configureStore({
        reducer,
        middleware: [...getDefaultMiddleware(),api]
    });
};
