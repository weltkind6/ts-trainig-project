export interface UsersState {
    users: any[],
    isLoading: boolean,
    error: null | string,
}

export enum UserActionTypes {
    FETCHED_USERS = 'FETCHED_USERS',
    FETCHED_USERS_SUCCESS = 'FETCHED_USERS_SUCCESS',
    FETCHED_USERS_ERROR = 'FETCHED_USERS_ERROR'
}

interface FetchUsersAction {
    type: UserActionTypes.FETCHED_USERS
}

interface FetchSuccessUsersAction {
    type: UserActionTypes.FETCHED_USERS_SUCCESS
    payload: any[]
}

interface FetchUsersErrorAction {
    type: UserActionTypes.FETCHED_USERS_ERROR
    payload: string
}

// Обобщает интерфейсы для action
export type CombineUserAction = FetchSuccessUsersAction | FetchUsersErrorAction | FetchUsersAction