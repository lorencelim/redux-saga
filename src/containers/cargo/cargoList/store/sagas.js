import { call, put, takeEvery } from "redux-saga/effects";
import axios from "../../../../app/api/axios" ;
import { initFetchingGetListCargo, initFetchingGetListCargoFailed, initFetchingGetListCargoSuccessfull } from "./actions";
import { INIT_GET_LIST_CARGO } from "./actionTypes";

export default function* CargoListSaga() {
    yield takeEvery(INIT_GET_LIST_CARGO, getCargoListData)
}

function* getCargoListData() {
    yield put(initFetchingGetListCargo());
    try {
        const response = yield call(axios.get, "/cargoTypeMaster")
        if (response && response.status === 200) {
            const {data} = response;
            const createData = [];
            for (const key in data) {
                createData.push(data[key])
            }
            yield put(initFetchingGetListCargoSuccessfull(createData))
        }
    } catch (err) {
        yield put(initFetchingGetListCargoFailed());
    }

}