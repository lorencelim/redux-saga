import { FETCHING_GET_LIST_CARGO_FAILED, FETCHING_GET_LIST_CARGO, FETCHING_GET_LIST_CARGO_SUCCESS } from "./actionTypes";

const initialState = {
    cargoList: [],
    isCargoDataFetching: false,
    isCargoDataFetchingFailed: false
}

const CargoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_GET_LIST_CARGO:
            return {
                ...state,
                isCargoDataFetching: true
            }

        case FETCHING_GET_LIST_CARGO_SUCCESS:
            // console.log(action)
            return {
                ...state,
                cargoList : action.cargoListData,
                isCargoDataFetching: false
            }

        case FETCHING_GET_LIST_CARGO_FAILED:
            return {
                ...state,
                isCargoDataFetchingFailed: true
            }

        default:
            return state;
    }
};

export default CargoListReducer;
