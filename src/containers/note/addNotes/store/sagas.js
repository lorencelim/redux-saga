import axios from "../../../../app/api/axios" ;
import { takeEvery, call, put } from "redux-saga/effects";
import { INIT_SAVE_NOTES_VALUE } from "./actionTypes";
import { initSaveNotesValueFailed, initSaveNotesValueSuccessfull } from "./actions";


// watcher saga
// put -> put value into your action and then thisd will dispatch the falue to action -> reducer
// call -> calling any api
// takevery, takelatest


export default function* AddNotesSaga() {
    yield takeEvery(INIT_SAVE_NOTES_VALUE, saveNotesSaga)
}

function* saveNotesSaga(action) {
    // api call and get response back from api

    const headerParams = {
        "content-type" : "application/json"
    }

    const createFinalNotesData = {
        abc: action.noteValue,
        efg: action.noteValue2,
        id: Math.floor(Math.random() * 100)
    } 

    console.log(createFinalNotesData);

    try {
        const response = yield call(axios.post,"/NotesList", createFinalNotesData, { headers: headerParams })
        
        if(response.status === 201){
            yield put(initSaveNotesValueSuccessfull(true))
        }
        console.log(response);
    } catch (err) {
        yield put(initSaveNotesValueFailed(true))
    }
}

