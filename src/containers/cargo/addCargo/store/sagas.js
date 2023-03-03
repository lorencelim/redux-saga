import axios from "../../../../app/api/axios" ;
import { takeEvery, call, put } from "redux-saga/effects";
import { INIT_SAVE_CARGO_VALUE } from "./actionTypes";
import { initSaveCargoValueFailed, initSaveCargoValueSuccessfull } from "./actions";

export default function* AddCargoSaga() {
    yield takeEvery(INIT_SAVE_CARGO_VALUE, saveCargoSaga)
}
function* saveCargoSaga(action) {
    const headerParams = {
        "content-type" : "application/json"
    }
    const createFinalCargoData = {
        cargo: action.cargo
    } 
    try {
        const response = yield call(axios.post,"/cargoTypeMaster", createFinalCargoData.cargo, { headers: headerParams })
        
        if(response.status === 201){
            yield put(initSaveCargoValueSuccessfull(true));
            alert("Cargo successfully added");
        }
    } catch (err) {
        yield put(initSaveCargoValueFailed(true));
        alert("Server down, please try it again later");
    }
}

