import { FETCHING_GET_LIST_DATA, FETCHING_GET_LIST_DATA_FAILED, FETCHING_GET_LIST_DATA_SUCCESS, INIT_GET_LIST_DATA } from "./actionTypes";




export function initGetListData(){
    return{
        type : INIT_GET_LIST_DATA
    }
}
export function initFetchingGetListData(){
    return{
        type : FETCHING_GET_LIST_DATA
    }
}
export function initFetchingGetListDataSuccessfull(notesListData){
    return{
        type : FETCHING_GET_LIST_DATA_SUCCESS,
        notesListData
    }
}
export function initFetchingGetListDataFailed(){
    return{
        type : FETCHING_GET_LIST_DATA_FAILED
    }
}