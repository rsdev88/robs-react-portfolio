import applicationsListReducer from "./applicationsList"

const redux = require("redux")
const store = redux.createStore(applicationsListReducer)

export default store