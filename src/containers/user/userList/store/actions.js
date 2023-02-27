import { FETCHING_GET_LIST_USER, FETCHING_GET_LIST_USER_FAILED, FETCHING_GET_LIST_USER_SUCCESS, INIT_GET_LIST_USER } from "./actionTypes";

export function initGetListUser(){
    return{
        type : INIT_GET_LIST_USER
    }
}
export function initFetchingGetListUser(){
    return{
        type : FETCHING_GET_LIST_USER
    }
}
export function initFetchingGetListUserSuccessfull(usersListData){
    return{
        type : FETCHING_GET_LIST_USER_SUCCESS,
        usersListData
    }
}
export function initFetchingGetListUserFailed(){
    return{
        type : FETCHING_GET_LIST_USER_FAILED
    }
}