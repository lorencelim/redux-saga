import { call, put, takeEvery } from "redux-saga/effects";
import axios from "../../../../app/api/axios" ;
import { initFetchingGetListTruck, initFetchingGetListTruckSuccessfull, initFetchingGetListTruckFailed } from "./actions";
import { INIT_GET_LIST_TRUCK } from "./actionTypes";

export default function* TrucksListSaga() {
    yield takeEvery(INIT_GET_LIST_TRUCK, getTrucksListTruck)
}

function* getTrucksListTruck() {
    yield put(initFetchingGetListTruck());
    try {
        const response = yield call(axios.get, "/Trucks")
        if (response && response.status === 200) {
            const {data} = response;
            const createData = [];
            for (const key in data) {
                createData.push(data[key])
            }
            yield put(initFetchingGetListTruckSuccessfull(createData))
        }
    } catch (err) {
        yield put(initFetchingGetListTruckFailed());
    }

}