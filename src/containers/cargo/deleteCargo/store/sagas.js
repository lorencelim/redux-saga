import { call, put, takeEvery } from "redux-saga/effects";
import axios from "../../../../app/api/axios" ;
import { initDeleteCargo, initDeteleCargoSuccessfull } from "./actions";
import { INIT_DELETE_CARGO } from "./actionTypes";

export default function* DeleteCargoSaga() {
    yield takeEvery(INIT_DELETE_CARGO, getCargoListData)
}

function* getCargoListData({id}) {
    try{
        const response = yield call(axios.delete, `/cargoTypeMaster/${id}`)
        if(response.status === 200){
            yield put(initDeteleCargoSuccessfull(true))
        }
    } catch (err) {
        yield put(initDeleteCargo(true));
    }
}