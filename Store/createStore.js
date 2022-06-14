import { combineReducers } from "@reduxjs/toolkit"
import Profile from "../pages/profile"
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import login from "../pages/Login/reducer";

// const appReducer = combineReducers ({
// Profile,
// Dashboard,
// login

// })
// const rootreducer = (state, action) => {
    
//         if(action.type === 'USER_LOGOUT') {
//             return appReducer(undefined,action);
//         }
//         return appReducer(this.state, action)
//   };
// export default rootreducer;

// const rootreducer =(state, action) => {
//     return appReducer(state, action)
// }

// const createStore = () => {
//   return combineReducers ({

//   })
// }



//******Promise based******** */
const appReducer = () => combineReducers ({
login
})

const rootreducer =(state, action) => {
    return appReducer(state, action)
}

export default appReducer