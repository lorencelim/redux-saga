// all, fork from redux-saga
import { all, fork } from "redux-saga/effects";
import AddNotesSaga from "../containers/note/addNotes/store/sagas";
import NotesListSaga from "../containers/note/notesList/store/sagas";
import AddTrucksSaga from "../containers/truck/addTruck/store/sagas";
import DeleteTruckSaga from "../containers/truck/deleteTruck/store/sagas";
import EditTrucksSaga from "../containers/truck/editTruck/store/sagas";
import TrucksListSaga from "../containers/truck/truckList/store/sagas";
import AddUsersSaga from "../containers/user/addUser/store/sagas";
import DeleteUserSaga from "../containers/user/deleteUser/store/sagas";
import EditUsersSaga from "../containers/user/editUser/store/sagas";
import UsersListSaga from "../containers/user/userList/store/sagas";

export default function* rootSaga() {
    yield all([
        fork(AddNotesSaga),
        fork(NotesListSaga),
        fork(AddTrucksSaga),
        fork(DeleteTruckSaga),
        fork(EditTrucksSaga),
        fork(TrucksListSaga),
        fork(AddUsersSaga),
        fork(DeleteUserSaga),
        fork(EditUsersSaga),
        fork(UsersListSaga)
    ]);
}
