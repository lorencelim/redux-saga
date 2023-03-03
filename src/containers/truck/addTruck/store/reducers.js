import { SAVE_TRUCKS_VALUE_SUCCESSFULL, SAVE_TRUCKS_VALUE_FAILED } from "./actionTypes";

const initialState ={
    success : false,
    failed : false
};

const AddTrucksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_TRUCKS_VALUE_SUCCESSFULL:
            return {
                ...state,
                success : action.success
            };
        case SAVE_TRUCKS_VALUE_FAILED:
            return {
                ...state,
                failed : action.failed
            };
    
        default:
            return state;
    }
}

export default AddTrucksReducer;