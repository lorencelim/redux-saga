import { INIT_EDIT_USER, EDITING_USER_SUCCESSFULL, EDITING_USER_FAILED } from "./actionTypes";


const initialState = {
    fetchingUserData: false,
    fetchingUserDataFailed: false
};

const EditUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_EDIT_USER:
            return {
                ...state,
                fetchingUserData: action.userDetail
            };
        case EDITING_USER_SUCCESSFULL:
            return {
                ...state,
                fetchingUserData: false
            };
        case EDITING_USER_FAILED:
            return {
                ...state,
                fetchingUserDataFailed: true
            };

        default:
            return state;
    }
}

export default EditUserReducer;