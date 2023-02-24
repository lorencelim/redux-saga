import { SAVE_USERS_VALUE_SUCCESSFULL, SAVE_USERS_VALUE_FAILED } from "./actionTypes";


const initialState ={
    success : false,
    failed : false
};

const AddUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_USERS_VALUE_SUCCESSFULL:
            // console.log(action)
            return {
                ...state,
                success : action.success
            };
        case SAVE_USERS_VALUE_FAILED:
            return {
                ...state,
                failed : action.failed
            };
    
        default:
            return state;
    }
}

export default AddUsersReducer;