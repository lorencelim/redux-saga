
// action is simply a javascript function
// type : mandatory
// additional parameter that you can pass to that particular action

import { EDITING_CARGO_FAILED, EDITING_CARGO_SUCCESSFULL, INIT_EDIT_CARGO } from "./actionTypes";


export function initEditCargo(cargoDetail) {
    return {
        type: INIT_EDIT_CARGO,
        cargoDetail
    }
}
export function initEditingCargoDataSuccessful(success){
    return{
        type : EDITING_CARGO_SUCCESSFULL,
        success
    }
}

export function initEditingCargoDataFailed(failed) {
    return {
        type: EDITING_CARGO_FAILED,
        failed
    }
}