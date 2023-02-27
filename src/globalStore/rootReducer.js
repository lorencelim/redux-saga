import { combineReducers } from "redux";
import AddTrucksReducer from "../containers/truck/addTruck/store/reducers";
import DeleteTruckReducer from "../containers/truck/deleteTruck/store/reducers";
import EditTrucksReducer from "../containers/truck/editTruck/store/reducers";
import TrucksListReducer from "../containers/truck/truckList/store/reducers";
import AddUsersReducer from "../containers/user/addUser/store/reducers";
import DeleteUserReducer from "../containers/user/deleteUser/store/reducers";
import EditUserReducer from "../containers/user/editUser/store/reducers";
import UsersListReducer from "../containers/user/userList/store/reducers";
import AddCargoReducer from "../containers/cargo/addCargo/store/reducers";
import CargoListReducer from "../containers/cargo/cargoList/store/reducers";
import DeleteCargoReducer from "../containers/cargo/deleteCargo/store/sagas";
import EditCargoReducer from "../containers/cargo/editCargo/store/reducers";
import DriverListReducer from "../containers/driver/driverList/store/reducers";

const rootReducer = combineReducers({
    TrucksListReducer,
    AddTrucksReducer,
    DeleteTruckReducer,
    EditTrucksReducer,
    AddUsersReducer,
    DeleteUserReducer,
    EditUserReducer,
    UsersListReducer,
    AddCargoReducer,
    CargoListReducer,
    DeleteCargoReducer,
    EditCargoReducer,
    DriverListReducer
});

export default rootReducer;