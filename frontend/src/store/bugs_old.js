import {createSlice} from '@reduxjs/toolkit'
import {createSelector} from 'reselect'

let lastId = 0

const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        //actions => actions handles
        bugAdded: (bugs, action) => {
            bugs.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            })
        },
        bugResolved: (bugs,action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id);
            bugs[index].resolved = true;
        },
        bugAssignedToUser: (bugs,action) => {
            const {bugId, userId} = action.payload;
            const index = bugs.findIndex(bug => bug.id === bugId);
            bugs[index].userId = userId;
        }
    }
});

console.log(slice)

export const {bugAdded,bugResolved,bugAssignedToUser} = slice.actions
export default slice.reducer

//export const getUnresolvedBugs = state =>
//    state.entities.bugs.filter(bug => !bug.resolved);

// Memoization
export const getUnresolvedBugs = createSelector(
    state => state.entities.bugs,
    state => state.entities.project,
    (bugs,projects) => bugs.filter(bug => !bug.resolved)
)

export const getBugsByUser = userId => createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => bug.userId === userId)
)
