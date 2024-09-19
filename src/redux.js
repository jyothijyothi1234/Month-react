import React from "react";
import createStore from 'redux';
import composeWithDevTools from 'redux-devtools-extension'



const middleware=[thunk];
const data=createStore(

    reducer,
    composeWithDevTools(applyMiddleware)=[...middleware]
   
)