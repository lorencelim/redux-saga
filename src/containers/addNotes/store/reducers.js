import { SAVE_NOTES_VALUE_SUCCESSFULL, SAVE_NOTES_VALUE_FAILED } from "./actionTypes";


const initialState ={
    success : false,
    failed : false
};

const AddNotesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_NOTES_VALUE_SUCCESSFULL:
            console.log(action)
            return {
                ...state,
                success : action.success
            };
        case SAVE_NOTES_VALUE_FAILED:
            return {
                ...state,
                failed : action.failed
            };
    
        default:
            return state;
    }
}

export default AddNotesReducer;