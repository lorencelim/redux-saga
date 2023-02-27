import { FETCHING_GET_LIST_DRIVER, FETCHING_GET_LIST_DRIVER_FAILED, FETCHING_GET_LIST_DRIVER_SUCCESS, INIT_GET_LIST_DRIVER } from "./actionTypes";

export function initGetListDriver(){
    return{
        type : INIT_GET_LIST_DRIVER
    }
}
export function initFetchingGetListDriver(){
    return{
        type : FETCHING_GET_LIST_DRIVER
    }
}
export function initFetchingGetListDriverSuccessfull(driverListData){
    return{
        type : FETCHING_GET_LIST_DRIVER_SUCCESS,
        driverListData
    }
}
export function initFetchingGetListDriverFailed(){
    return{
        type : FETCHING_GET_LIST_DRIVER_FAILED
    }
}