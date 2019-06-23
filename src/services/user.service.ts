import { AxiosPromise } from 'axios';
import { IUser } from '../store/reducers/users.reducer';
import { axiosInstance } from '../config';

type GetUser = () => AxiosPromise<IUser[]>;

export const getUsers: GetUser = () => axiosInstance.get<IUser[]>('/participants?key=10wtkqj');
