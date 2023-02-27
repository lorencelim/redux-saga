import { call, put, takeEvery } from "redux-saga/effects";
import axios from "../../../../app/api/axios" ;
import { initFetchingGetListUser, initFetchingGetListUserSuccessfull, initFetchingGetListUserFailed } from "./actions";
import { INIT_GET_LIST_USER } from "./actionTypes";

export default function* UsersListSaga() {
    yield takeEvery(INIT_GET_LIST_USER, getUsersListData)
}

function* getUsersListData() {
    yield put(initFetchingGetListUser());
    try {
        const response = yield call(axios.get, "/users")
        if (response && response.status === 200) {
            const {data} = response;
            const createData = [];
            for (const key in data) {
                createData.push(data[key])
            }
            yield put(initFetchingGetListUserSuccessfull(createData))
        }
    } catch (err) {
        yield put(initFetchingGetListUserFailed());
    }

}