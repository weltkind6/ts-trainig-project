import {CombineUserAction, UserActionTypes, UsersState} from "../../types/users";

const initialState: UsersState = {
    users: [],
    isLoading: false,
    error: null
}

export const userReducer = (state = initialState, action: CombineUserAction) => {
    switch (action.type) {
        case UserActionTypes.FETCHED_USERS:
            return {
                isLoading: true,
                error: null,
                users: []
            }
        case UserActionTypes.FETCHED_USERS_SUCCESS:
            return {
                isLoading: false,
                error: null,
                users: action.payload
            }
        case UserActionTypes.FETCHED_USERS_ERROR:
            return {
                isLoading: false,
                error: action.payload,
                users: []
            }
        default:
            return state

    }
}