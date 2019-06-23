import { IUser, usersReducer } from './users.reducer';
import { combineReducers, Reducer } from 'redux';
import { searchReducer } from './search.reducer';

export interface IRootState {
    search: string;
    users: IUser[];
}

export const rootReducers: Reducer<IRootState> = combineReducers({
    search: searchReducer,
    users: usersReducer
});
