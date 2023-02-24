import { DELETE_TRUCK_FAILED, DELETE_TRUCK_SUCCESSFULL, INIT_DELETE_TRUCK } from "./actionTypes";

export function initDeleteTruck(id){
    return{
        type : INIT_DELETE_TRUCK,
        id
    }
}
export function initDeteleTruckSuccessfull(successfullDelete){
    return{
        type : DELETE_TRUCK_SUCCESSFULL,
        successfullDelete
    }
}
export function initDeteleTruckFailed(failedDelete){
    return{
        type : DELETE_TRUCK_FAILED,
        failedDelete
    }
}