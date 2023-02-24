import { FETCHING_GET_LIST_DATA, FETCHING_GET_LIST_DATA_SUCCESS,  FETCHING_GET_LIST_DATA_FAILED } from "./actionTypes";

const initialState = {
    notesList: [],
    isNotesDataFetching: false,
    isNotesDataFetchingFailed: false
}

const NotesListReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_GET_LIST_DATA:
            console.log(action)
            return {
                ...state,
                isNotesDataFetching: true
            }

        case FETCHING_GET_LIST_DATA_SUCCESS:
            console.log(action)
            return {
                ...state,
                notesList : action.notesListData,
                isNotesDataFetching: false
            }

        case FETCHING_GET_LIST_DATA_FAILED:
            return {
                ...state,
                isNotesDataFetchingFailed: true
            }

        default:
            return state;
    }
};

export default NotesListReducer;
