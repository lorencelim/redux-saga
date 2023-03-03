import axios from "../../../../app/api/axios";
import { takeEvery, call, put } from "redux-saga/effects";
import { INIT_SAVE_TRUCKS_VALUE } from "./actionTypes";
import { initSaveTrucksValueFailed, initSaveTrucksValueSuccessfull } from "./actions";

export default function* AddTrucksSaga() {
    yield takeEvery(INIT_SAVE_TRUCKS_VALUE, saveTrucksSaga)
}
function* saveTrucksSaga(action) {
    const headerParams = {
        "content-type": "application/json"
    }
    const createFinalTrucksData = {
        trucks: action.trucks
    }
    try {
        const response = yield call(axios.post, "/Trucks", createFinalTrucksData.trucks, { headers: headerParams })

        if (response.status === 201) {
            yield put(initSaveTrucksValueSuccessfull(true));
            alert("Truck Added Successfully");
        }
    } catch (err) {
        yield put(initSaveTrucksValueFailed(true))
        alert("Server down, please try it again later");
    }
}

