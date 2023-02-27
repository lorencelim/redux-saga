import { FETCHING_GET_LIST_CARGO, FETCHING_GET_LIST_CARGO_FAILED, FETCHING_GET_LIST_CARGO_SUCCESS, INIT_GET_LIST_CARGO } from "./actionTypes";

export function initGetListCargo(){
    return{
        type : INIT_GET_LIST_CARGO
    }
}
export function initFetchingGetListCargo(){
    return{
        type : FETCHING_GET_LIST_CARGO
    }
}
export function initFetchingGetListCargoSuccessfull(cargoListData){
    // console.log(cargoListData);
    return{
        type : FETCHING_GET_LIST_CARGO_SUCCESS,
        cargoListData
    }
}
export function initFetchingGetListCargoFailed(){
    return{
        type : FETCHING_GET_LIST_CARGO_FAILED
    }
}