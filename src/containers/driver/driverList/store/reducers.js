import { FETCHING_GET_LIST_DRIVER_FAILED, FETCHING_GET_LIST_DRIVER, FETCHING_GET_LIST_DRIVER_SUCCESS } from "./actionTypes";

const initialState = {
    driverList: [],
    isDriverDataFetching: false,
    isDriverDataFetchingFailed: false
}

const DriverListReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_GET_LIST_DRIVER:
            return {
                ...state,
                isDriverDataFetching: true
            }

        case FETCHING_GET_LIST_DRIVER_SUCCESS:
            return {
                ...state,
                driverList : action.driverListData,
                isDriverDataFetching: false
            }

        case FETCHING_GET_LIST_DRIVER_FAILED:
            return {
                ...state,
                isDriverDataFetchingFailed: true
            }

        default:
            return state;
    }
};

export default DriverListReducer;
