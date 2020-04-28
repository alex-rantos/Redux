import configureStore from './store/configureStore';
import * as actions from './store/projects'
import {bugAdded, bugResolved, getUnresolvedBugs,addBug,resolveBug, bugAssignedToUser,getBugsByUser,loadBugs, assignBug,assignBugToUser} from './store/bugs'
import { userAdded } from './store/users';
import * as apiActions from './store/api'

const store = configureStore();

// load bugs from server
store.dispatch(loadBugs());

setTimeout(() => store.dispatch(assignBugToUser(1,4)), 2000);
// setTimeout(() => store.dispatch(loadBugs()), 2000);

// unsubscribe when UI component is not visible to prevent memory leaks
// const unsubscrible = store.subscribe(() => {
//     console.log("Store changed!", store.getState());
// });
// store.dispatch(bugAdded({description:'bugx3'}));
// store.dispatch(bugAdded({description:'bu32gx3'}));
// store.dispatch(bugAdded({description:'bug41x3'}));
// store.dispatch(bugResolved({id :2}));

// store.dispatch(userAdded({name: "User 1"}));
// store.dispatch(userAdded({name: "User 2"}));

// store.dispatch(bugAssignedToUser({userId: 1, bugId: 2}))

// const x = getUnresolvedBugs(store.getState());
// const y = getUnresolvedBugs(store.getState());
// console.log(x===y);

// // in order to setState in store use dispatch
// store.dispatch(actions.projectAdded({description:'redux1'}));
// store.dispatch(actions.projectAdded({description:'redux2'}));
// store.dispatch(actions.projectAdded({description:'redux3'}));
// store.dispatch(actions.projectCompleted({id:2}));
// store.dispatch(actions.projectRemoved({id:2}));

// const bugs = getBugsByUser(2)(store.getState())
// console.log(bugs)
// unsubscrible();

// store.dispatch((dispatch, getState) => {
//     dispatch({type:'bugReceived', bugs: [11,21,31]})
//     console.log(getState())
// })
// store.dispatch((dispatch, getState) => {
//     dispatch({type:'error', payload: {message: "An error occured"}})
// })

// console.log(store)