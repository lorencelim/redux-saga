import { call, put, takeEvery } from "redux-saga/effects";
import axios from "../../../../app/api/axios" ;
import { initFetchingGetListData, initFetchingGetListDataFailed, initFetchingGetListDataSuccessfull } from "./actions";
import { INIT_GET_LIST_DATA } from "./actionTypes";



export default function* NotesListSaga() {
    yield takeEvery(INIT_GET_LIST_DATA, getNotesListSaga)
}


function* getNotesListSaga() {
    yield put(initFetchingGetListData());
    try {
        const response = yield call(axios.get, "/NotesList")
        if (response && response.status === 200) {
            const {data} = response;
            const createData = [];
            for (const key in data) {
                createData.push(data[key])
            }
            yield put(initFetchingGetListDataSuccessfull(createData))
        }
    } catch (err) {
        yield put(initFetchingGetListDataFailed());
    }

}