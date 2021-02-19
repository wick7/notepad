import { createStore, applyMiddleware, compose } from "redux"
import thunk from 'redux-thunk';
import rootReducer from "./rootReducers"

// const enhancers = [applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__,]
// const composeEnhancer = compose(...enhancers)

// export default createStore(rootReducer, undefined, composeEnhancer)

// const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// export default function configureStore(preloadedState) {
//     const thunks = applyMiddleware(thunk)

//     const enhancers = [reduxHelper, thunks]
//     const composedEnhancers = compose(...enhancers)

//     const store = createStore(rootReducer)

//     return store
// }

export default createStore(rootReducer, applyMiddleware(thunk))