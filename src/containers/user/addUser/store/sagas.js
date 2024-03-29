import axios from "../../../../app/api/axios";
import { takeEvery, call, put } from "redux-saga/effects";
import { INIT_SAVE_USERS_VALUE } from "./actionTypes";
import { initSaveUsersValueFailed, initSaveUsersValueSuccessfull } from "./actions";

export default function* AddUsersSaga() {
    yield takeEvery(INIT_SAVE_USERS_VALUE, saveUsersSaga)
}

function* saveUsersSaga(action) {
    const headerParams = {
        "content-type": "application/json"
    }
    const createFinalUsersData = {
        Users: action.users
    }
    console.log(createFinalUsersData);
    try {
        const response = yield call(axios.post, "/users", createFinalUsersData.Users, { headers: headerParams })
        if (response.status === 201) {
            yield put(initSaveUsersValueSuccessfull(true));
            alert("Account Successfully Created");
        }
    } catch (err) {
        yield put(initSaveUsersValueFailed(true))
        alert("Server down, please try it again later");
    }
}

