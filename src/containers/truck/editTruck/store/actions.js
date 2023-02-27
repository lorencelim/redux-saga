import { EDITING_TRUCK_FAILED, EDITING_TRUCK_SUCCESSFULL, INIT_EDIT_TRUCK } from "./actionTypes";

export function initEditTruck(truckDetail) {
    return {
        type: INIT_EDIT_TRUCK,
        truckDetail
    }
}
export function initEditingTruckDataSuccessful(success){
    return{
        type : EDITING_TRUCK_SUCCESSFULL,
        success
    }
}

export function initEditingTruckDataFailed(failed) {
    return {
        type: EDITING_TRUCK_FAILED,
        failed
    }
}