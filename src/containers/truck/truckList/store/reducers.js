import { FETCHING_GET_LIST_TRUCK_FAILED, FETCHING_GET_LIST_TRUCK, FETCHING_GET_LIST_TRUCK_SUCCESS } from "./actionTypes";

const initialState = {
    trucksList: [],
    isTrucksDataFetching: false,
    isTrucksDataFetchingFailed: false
}

const TrucksListReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_GET_LIST_TRUCK:
            return {
                ...state,
                isTrucksDataFetching: true
            }

        case FETCHING_GET_LIST_TRUCK_SUCCESS:
            // console.log(action)
            return {
                ...state,
                trucksList : action.trucksListData,
                isTrucksDataFetching: false
            }

        case FETCHING_GET_LIST_TRUCK_FAILED:
            return {
                ...state,
                isTrucksDataFetchingFailed: true
            }

        default:
            return state;
    }
};

export default TrucksListReducer;
