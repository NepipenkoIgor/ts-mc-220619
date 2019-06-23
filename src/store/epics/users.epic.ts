import { ActionsObservable, ofType } from 'redux-observable';
import { AnyAction } from 'redux';
import { getUsersSuccess, UsersActions } from '../actions/users.action';
import { catchError, map, switchMap } from 'rxjs/operators';
import { from, Observable, of } from 'rxjs';
import { getUsers } from '../../services/user.service';
import { AxiosResponse } from 'axios';
import { IUser } from '../reducers/users.reducer';

export const usersEpics = (actions$: ActionsObservable<AnyAction>) =>
    actions$.pipe(
        ofType(UsersActions.GET_USER_PENDING),
        switchMap(() => {
            return (from(getUsers()
                .then((res: AxiosResponse<IUser[]>): IUser[] => res.data)) as Observable<IUser[]>)
                .pipe(
                    map((users: IUser[]) => getUsersSuccess(users)),
                    catchError((_err) => of({type: 'Error'}))
                );
        })
    );
