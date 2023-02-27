import { INIT_SAVE_CARGO_VALUE, SAVE_CARGO_VALUE_SUCCESSFULL, SAVE_CARGO_VALUE_FAILED } from "./actionTypes";


export function initSaveCargoValue(cargo) {
    return {
        type: INIT_SAVE_CARGO_VALUE,
        cargo
    }
}

export function initSaveCargoValueSuccessfull(success) {
    return {
        type: SAVE_CARGO_VALUE_SUCCESSFULL,
        success
    }
}

export function initSaveCargoValueFailed(failed) {
    return {
        type: SAVE_CARGO_VALUE_FAILED,
        failed
    }
}