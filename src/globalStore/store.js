

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

// sagamiddleware

let sagaMiddleware = createSagaMiddleware();


const store = configureStore({
    reducer : rootReducer,
    middleware : (getDefaultMiddleWare ) => [...getDefaultMiddleWare({thunk : false, serializableCheck : false }),
    sagaMiddleware,
    ]
});

// run your rootsaga

sagaMiddleware.run(rootSaga)

export default store;
