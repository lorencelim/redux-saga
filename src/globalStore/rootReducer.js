import { combineReducers } from "redux";
import AddNotesReducer from "../containers/note/addNotes/store/reducers";
import NotesListReducer from "../containers/note/notesList/store/reducers";
import AddTrucksReducer from "../containers/truck/addTruck/store/reducers";
import DeleteTruckReducer from "../containers/truck/deleteTruck/store/reducers";
import EditTrucksReducer from "../containers/truck/editTruck/store/reducers";
import TrucksListReducer from "../containers/truck/truckList/store/reducers";
import AddUsersReducer from "../containers/user/addUser/store/reducers";
import DeleteUserReducer from "../containers/user/deleteUser/store/reducers";
import EditUserReducer from "../containers/user/editUser/store/reducers";
import UsersListReducer from "../containers/user/userList/store/reducers";

const rootReducer = combineReducers({
    AddNotesReducer,
    NotesListReducer,
    TrucksListReducer,
    AddTrucksReducer,
    DeleteTruckReducer,
    EditTrucksReducer,
    AddUsersReducer,
    DeleteUserReducer,
    EditUserReducer,
    UsersListReducer
});

export default rootReducer;