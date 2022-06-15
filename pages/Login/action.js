import axios from "axios";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionTypes"

export const loginTriggered = () => {
    return {
        type:LOGIN_SUCCESS,
        payload:{
            userName:"abc",
            password:"1243",
            role:"admin"
        }
    }
}
export const loginFailed = () => {
    return {
        type:LOGIN_FAILURE
    }
}
// export const loginTriggered = (states) => (dispatch,getState)=> {
//     console.log(states);
//     const requestBody ={
//         email:states.userName,
//         password:states.password
//     }
//     return new Promise((resolve, reject)=> {                             //to hold the dispatch action ->async Thunk
    //     if(states.userName === "Abc" && states.password === "123"){
    //     dispatch({
    //         type:LOGIN_SUCCESS,
    //         payload:{
    //             userName:"abc",
    //             password:"1243",
    //             role:"admin"
    //         }
    //     })
    //     resolve("RESOLVED");
    // 
    // else {
    //     dispatch({
    //         type:LOGIN_FAILURE
    //     })
    //     reject("REJECTED")
    // }
    // axios.post(url,obj).then((res)=>
    // if(resolve.status===200){
    //     dispatch({
    //                 type:LOGIN_SUCCESS,
    //                 payload:{
    //                     ...res.data.data
    //                 }
    //             })
    // })
    // else{
    //     dispatch({
            //         type:LOGIN_FAILURE
            //     })
            //     reject(res.data.message)
    // }
//     });
   
// }