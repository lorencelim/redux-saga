import { combineReducers } from "redux";
import AddNotesReducer from "../containers/addNotes/store/reducers";
import NotesListReducer from "../containers/notesList/store/reducers";

const rootReducer = combineReducers({
    AddNotesReducer,
    NotesListReducer
});

export default rootReducer;