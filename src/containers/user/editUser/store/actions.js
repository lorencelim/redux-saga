import { EDITING_USER_FAILED, EDITING_USER_SUCCESSFULL, INIT_EDIT_USER } from "./actionTypes";


export function initEditUser(userDetail) {
    return {
        type: INIT_EDIT_USER,
        userDetail
    }
}
export function initEditingUserDataSuccessful(success){
    return{
        type : EDITING_USER_SUCCESSFULL,
        success
    }
}

export function initEditingUserDataFailed(failed) {
    return {
        type: EDITING_USER_FAILED,
        failed
    }
}