import axios from "../../../../app/api/axios";
import { takeEvery, call, put } from "redux-saga/effects";
import { initEditingCargoDataFailed, initEditingCargoDataSuccessful } from "./actions";
import { INIT_EDIT_CARGO } from "./actionTypes";

export default function* EditCargoSaga() {
    yield takeEvery(INIT_EDIT_CARGO, editCargoSaga)
}

function* editCargoSaga({ cargoDetail: { id, updatedCargo: cargo } }) {
    try {
        const response = yield call(axios.put, `/cargoTypeMaster/${id}`, cargo)
        if (response.status === 200) {
            yield put(initEditingCargoDataSuccessful(true))
        }
    } catch (err) {
        yield put(initEditingCargoDataFailed(true))
    }
}

