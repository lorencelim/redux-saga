// all, fork from redux-saga
import {all, fork} from "redux-saga/effects";
import AddNotesSaga from "../containers/addNotes/store/sagas";
import NotesListSaga from "../containers/notesList/store/sagas";


export default function* rootSaga(){
    yield all([fork(AddNotesSaga), fork(NotesListSaga)]);
}
