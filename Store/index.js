// import { View, Text } from 'react-native'
// import React from 'react'
// import { configureStore } from '@reduxjs/toolkit';
// import profile from '../pages/profile/reducer';
// import login from '../pages/Login/reducer';

// export default configureStore({
//     reducer:{
//        specificProfile: profile,
//        loginState: login
//     }
// })

import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './createStore'
// const applyMiddleware = [thunk,logger, errorhandler]       Multiple fns

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;