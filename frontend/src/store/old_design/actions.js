import * as actions from './actionTypes';

export const bugAdded = (descr, arg2) => ({
    type: actions.BUG_ADDED,
    payload: {
        description: descr,
        test : arg2
    }
});

export const bugResolved = id => ({
    type: actions.BUG_RESOLVED,
    payload: {
        id: id
    }
})

// export function bugAdded(description) {
//     return {
//         type: actions.BUG_ADDED,
//         payload: {
//             description:"Bug1"
//         }
//     }
// }