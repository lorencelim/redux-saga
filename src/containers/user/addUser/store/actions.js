
// action is simply a javascript function
// type : mandatory
// additional parameter that you can pass to that particular action

import { INIT_SAVE_USERS_VALUE, SAVE_USERS_VALUE_SUCCESSFULL, SAVE_USERS_VALUE_FAILED } from "./actionTypes";


export function initSaveUsersValue(users) {
    return {
        type: INIT_SAVE_USERS_VALUE,
        users
    }
}

export function initSaveUsersValueSuccessfull(success) {
    return {
        type: SAVE_USERS_VALUE_SUCCESSFULL,
        success
    }
}

export function initSaveUsersValueFailed(failed) {
    return {
        type: SAVE_USERS_VALUE_FAILED,
        failed
    }
}