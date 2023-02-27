import { call, put, takeEvery } from "redux-saga/effects";
import axios from "../../../../app/api/axios" ;
import { initDeteleUserFailed, initDeteleUserSuccessfull } from "./actions";
import { INIT_DELETE_USER } from "./actionTypes";

export default function* DeleteUserSaga() {
    yield takeEvery(INIT_DELETE_USER, getUsersListData)
}

function* getUsersListData({id}) {
    console.log(id);
    try{
        const response = yield call(axios.delete, `/users/${id}`)
        if(response.status === 200){
            yield put(initDeteleUserSuccessfull(true))
        }
    } catch (err) {
        yield put(initDeteleUserFailed(true));
    }
}