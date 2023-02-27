import { DELETE_CARGO_FAILED, DELETE_CARGO_SUCCESSFULL } from "./actionTypes";

const initialState = {
    deletingCargo: false,
    deletingCargoFailed: false
}

const DeleteCargoReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_CARGO_SUCCESSFULL:  
        return {
                ...state,
                deletingCargo: action.successfullDelete
            }

        case DELETE_CARGO_FAILED:
            return {
                ...state,
                deletingCargoFailed: action.failedDelete
            }

        default:
            return state;
    }
};

export default DeleteCargoReducer;
