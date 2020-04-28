const logger = param => store => next => action => {
    console.log("store", store);
    console.log("next", next);
    console.log("action", action);
    console.log("--param--", param);
    next(action)
}

export default logger;
// currying
// From N to 1 