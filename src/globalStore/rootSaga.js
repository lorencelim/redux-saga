import { all, fork } from "redux-saga/effects";
import AddCargoSaga from "../containers/cargo/addCargo/store/sagas";
import CargoListSaga from "../containers/cargo/cargoList/store/sagas";
import DeleteCargoSaga from "../containers/cargo/deleteCargo/store/sagas";
import EditCargoSaga from "../containers/cargo/editCargo/store/sagas";
import DriverListSaga from "../containers/driver/driverList/store/sagas";
import AddTrucksSaga from "../containers/truck/addTruck/store/sagas";
import DeleteTruckSaga from "../containers/truck/deleteTruck/store/sagas";
import EditTrucksSaga from "../containers/truck/editTruck/store/sagas";
import TrucksListSaga from "../containers/truck/truckList/store/sagas";
import AddUsersSaga from "../containers/user/addUser/store/sagas";
import DeleteUserSaga from "../containers/user/deleteUser/store/sagas";
import EditUsersSaga from "../containers/user/editUser/store/sagas";
import UsersListSaga from "../containers/user/userList/store/sagas";

export default function* rootSaga() {
    yield all([
        fork(AddTrucksSaga),
        fork(DeleteTruckSaga),
        fork(EditTrucksSaga),
        fork(TrucksListSaga),
        fork(AddUsersSaga),
        fork(DeleteUserSaga),
        fork(EditUsersSaga),
        fork(UsersListSaga),
        fork(AddCargoSaga),
        fork(CargoListSaga),
        fork(DeleteCargoSaga),
        fork(EditCargoSaga),
        fork(DriverListSaga)
    ]);
}
