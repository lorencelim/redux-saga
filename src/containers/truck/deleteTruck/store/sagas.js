import { call, put, takeEvery } from "redux-saga/effects";
import axios from "../../../../app/api/axios" ;
import { initDeleteTruck, initDeteleTruckSuccessfull } from "./actions";
import { INIT_DELETE_TRUCK } from "./actionTypes";

export default function* DeleteTruckSaga() {
    yield takeEvery(INIT_DELETE_TRUCK, getTrucksListData)
}

function* getTrucksListData({id}) {
    try{
        const response = yield call(axios.delete, `/Trucks/${id}`)
        if(response.status === 200){
            yield put(initDeteleTruckSuccessfull(true))
        }
    } catch (err) {
        yield put(initDeleteTruck(true));
    }
}