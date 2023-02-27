import { DELETE_CARGO_FAILED, DELETE_CARGO_SUCCESSFULL, INIT_DELETE_CARGO } from "./actionTypes";

export function initDeleteCargo(id){
    return{
        type : INIT_DELETE_CARGO,
        id
    }
}
export function initDeteleCargoSuccessfull(successfullDelete){
    return{
        type : DELETE_CARGO_SUCCESSFULL,
        successfullDelete
    }
}
export function initDeteleCargoFailed(failedDelete){
    return{
        type : DELETE_CARGO_FAILED,
        failedDelete
    }
}