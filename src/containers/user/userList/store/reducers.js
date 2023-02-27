import { FETCHING_GET_LIST_USER_FAILED, FETCHING_GET_LIST_USER, FETCHING_GET_LIST_USER_SUCCESS } from "./actionTypes";

const initialState = {
    usersList: [],
    isUsersDataFetching: false,
    isUsersDataFetchingFailed: false
}

const UsersListReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_GET_LIST_USER:
            return {
                ...state,
                isUsersDataFetching: true
            }

        case FETCHING_GET_LIST_USER_SUCCESS:
            return {
                ...state,
                usersList : action.usersListData,
                isUsersDataFetching: false
            }

        case FETCHING_GET_LIST_USER_FAILED:
            return {
                ...state,
                isUsersDataFetchingFailed: true
            }

        default:
            return state;
    }
};

export default UsersListReducer;
