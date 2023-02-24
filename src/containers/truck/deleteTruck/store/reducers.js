import { DELETE_TRUCK_FAILED, DELETE_TRUCK_SUCCESSFULL } from "./actionTypes";

const initialState = {
    deletingTruck: false,
    deletingTruckFailed: false
}

const DeleteTruckReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_TRUCK_SUCCESSFULL:  
        return {
                ...state,
                deletingTruck: action.successfullDelete
            }

        case DELETE_TRUCK_FAILED:
            return {
                ...state,
                deletingTruckFailed: action.failedDelete
            }

        default:
            return state;
    }
};

export default DeleteTruckReducer;
