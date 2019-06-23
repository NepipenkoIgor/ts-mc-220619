import { IUser } from "../reducers/users.reducer";

export enum UsersActions {
    GET_USER_PENDING = 'GET_USER_PENDING',
    GET_USER_SUCCESS = 'GET_USER_SUCCESS',
}

export function getUsersPending() {
    return {
        type: UsersActions.GET_USER_PENDING
    };
}

export function getUsersSuccess(payload: IUser[]) {
    return {
        type: UsersActions.GET_USER_SUCCESS,
        payload
    };
}
