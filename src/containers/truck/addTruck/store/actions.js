import { INIT_SAVE_TRUCKS_VALUE, SAVE_TRUCKS_VALUE_SUCCESSFULL, SAVE_TRUCKS_VALUE_FAILED } from "./actionTypes";

export function initSaveTrucksValue(trucks) {
    return {
        type: INIT_SAVE_TRUCKS_VALUE,
        trucks
    }
}

export function initSaveTrucksValueSuccessfull(success) {
    return {
        type: SAVE_TRUCKS_VALUE_SUCCESSFULL,
        success
    }
}

export function initSaveTrucksValueFailed(failed) {
    return {
        type: SAVE_TRUCKS_VALUE_FAILED,
        failed
    }
}