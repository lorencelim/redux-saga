import axios from "../../../../app/api/axios";
import { takeEvery, call, put } from "redux-saga/effects";
import { initEditingUserDataFailed, initEditingUserDataSuccessful } from "./actions";
import { INIT_EDIT_USER } from "./actionTypes";

export default function* EditUsersSaga() {
    yield takeEvery(INIT_EDIT_USER, editingUsersSaga)
}
function* editingUsersSaga({userDetail: {updatedUser: user}}) {
    try {
        const response = yield call(axios.put, `/users/${user.id}`, user)
            if (response.status === 200) {
                yield put(initEditingUserDataSuccessful(true))
            }
    } catch (err) {
        yield put(initEditingUserDataFailed(true))
    }
}

