import { INIT_EDIT_CARGO, EDITING_CARGO_SUCCESSFULL, EDITING_CARGO_FAILED } from "./actionTypes";


const initialState = {
    fetchingCargoData: false,
    fetchingCargoDataFailed: false
};

const EditCargoReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_EDIT_CARGO:
            console.log(action);
            return {
                ...state,
                fetchingCargoData: action.cargoDetail
            };
        case EDITING_CARGO_SUCCESSFULL:
            return {
                ...state,
                fetchingCargoData: false
            };
        case EDITING_CARGO_FAILED:
            return {
                ...state,
                fetchingCargoDataFailed: true
            };

        default:
            return state;
    }
}

export default EditCargoReducer;