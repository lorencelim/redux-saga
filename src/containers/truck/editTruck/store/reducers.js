import { INIT_EDIT_TRUCK, EDITING_TRUCK_SUCCESSFULL, EDITING_TRUCK_FAILED } from "./actionTypes";


const initialState = {
    fetchingTruckData: false,
    fetchingTruckDataFailed: false
};

const EditTrucksReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_EDIT_TRUCK:
            console.log(action);
            return {
                ...state,
                fetchingTruckData: action.truckDetail
            };
        case EDITING_TRUCK_SUCCESSFULL:
            return {
                ...state,
                fetchingTruckData: false
            };
        case EDITING_TRUCK_FAILED:
            return {
                ...state,
                fetchingTruckDataFailed: true
            };

        default:
            return state;
    }
}

export default EditTrucksReducer;