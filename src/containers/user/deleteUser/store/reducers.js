import { DELETE_USER_FAILED, DELETE_USER_SUCCESSFULL } from "./actionTypes";

const initialState = {
    deletingUser: false,
    deletingUserFailed: false
}

const DeleteUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_USER_SUCCESSFULL:  
        return {
                ...state,
                deletingUser: action.successfullDelete
            }

        case DELETE_USER_FAILED:
            return {
                ...state,
                deletingUserFailed: action.failedDelete
            }

        default:
            return state;
    }
};

export default DeleteUserReducer;
