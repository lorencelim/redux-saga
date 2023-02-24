import { DELETE_USER_FAILED, DELETE_USER_SUCCESSFULL, INIT_DELETE_USER } from "./actionTypes";

export function initDeleteUser(id){
    return{
        type : INIT_DELETE_USER,
        id
    }
}
export function initDeteleUserSuccessfull(successfullDelete){
    return{
        type : DELETE_USER_SUCCESSFULL,
        successfullDelete
    }
}
export function initDeteleUserFailed(failedDelete){
    return{
        type : DELETE_USER_FAILED,
        failedDelete
    }
}