import { call, put, takeEvery } from "redux-saga/effects";
import axios from "../../../../app/api/axios" ;
import { initFetchingGetListDriver, initFetchingGetListDriverFailed, initFetchingGetListDriverSuccessfull } from "./actions";
import { INIT_GET_LIST_DRIVER } from "./actionTypes";

export default function* DriverListSaga() {
    yield takeEvery(INIT_GET_LIST_DRIVER, getDriverListData)
}

function* getDriverListData() {
    yield put(initFetchingGetListDriver());
    try {
        const response = yield call(axios.get, "/drivers")
        if (response && response.status === 200) {
            const {data} = response;
            const createData = [];
            for (const key in data) {
                createData.push(data[key])
            }
            yield put(initFetchingGetListDriverSuccessfull(createData))
        }
    } catch (err) {
        yield put(initFetchingGetListDriverFailed());
    }

}