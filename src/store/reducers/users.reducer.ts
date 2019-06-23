import { AnyAction } from 'redux';
import { UsersActions } from '../actions/users.action';

export interface IUser {
    profileName: string;
    firstName: string;
    surname: string;
    photo?: string;
    country: string;
}

const initialState: IUser[] = [];

export function usersReducer(state: IUser[] = initialState, actions: AnyAction): IUser[] {
    switch (actions.type) {
        case UsersActions.GET_USER_SUCCESS: {
            return [...state, ...actions.payload];
        }
        default: {
            return state;
        }
    }
}
