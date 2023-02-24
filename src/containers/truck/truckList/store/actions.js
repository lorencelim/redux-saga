import { FETCHING_GET_LIST_TRUCK, FETCHING_GET_LIST_TRUCK_FAILED, FETCHING_GET_LIST_TRUCK_SUCCESS, INIT_GET_LIST_TRUCK } from "./actionTypes";

export function initGetListTruck(){
    return{
        type : INIT_GET_LIST_TRUCK
    }
}
export function initFetchingGetListTruck(){
    return{
        type : FETCHING_GET_LIST_TRUCK
    }
}
export function initFetchingGetListTruckSuccessfull(trucksListData){
    // console.log(trucksListData);
    return{
        type : FETCHING_GET_LIST_TRUCK_SUCCESS,
        trucksListData
    }
}
export function initFetchingGetListTruckFailed(){
    return{
        type : FETCHING_GET_LIST_TRUCK_FAILED
    }
}