import {createSlice} from '@reduxjs/toolkit'

let lastId = 0;

const slice = createSlice({
    name: 'project',
    initialState: [],
    reducers: {
        projectAdded: (projects, action) => {
            projects.push({
                id: ++lastId,
                description: action.payload.description,
                completed: false
            })
        },
        projectCompleted: (projects, action) => {
            const index = projects.findIndex(project => project.id === action.payload.id);
            projects[index].completed = true;
        },
        projectRemoved: (projects, action) => {
            return projects.filter(project => project.id !== action.payload.id);
        }
    }
})

export default slice.reducer
export const {projectAdded,projectRemoved,projectCompleted} = slice.actions