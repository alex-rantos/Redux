import {createSlice} from '@reduxjs/toolkit'

let lastId = 0;

const slice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        userAdded: (users, action) => {
            users.push({
                id: ++lastId,
                name: action.payload.name,
            })
        },
        userAssignBug: (users, action) => {
            return users.findIndex((memberId, bugId) => {
                memberId === action.payload.id,
                bugs.push(bugId)
            })
        }
    }
})

export default slice.reducer
export const {userAdded} = slice.actions