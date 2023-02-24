import axios from "../../../../app/api/axios" ;
import { takeEvery, call, put } from "redux-saga/effects";
import { initEditingTruckDataFailed, initEditingTruckDataSuccessful } from "./actions";
import { INIT_EDIT_TRUCK } from "./actionTypes";

export default function* EditTrucksSaga() {
    yield takeEvery(INIT_EDIT_TRUCK, editTrucksSaga)
}

function* editTrucksSaga({truckDetail: {id, updatedTruck: truck}}) {
    try {
        const response = yield call(axios.put, `/Trucks/${id}`, truck)
        console.log(response)
            if (response.status === 200) {
                yield put(initEditingTruckDataSuccessful(true))
            }
    } catch (err) {
        yield put(initEditingTruckDataFailed(true))
    }
}

