import { combineEpics, Epic } from 'redux-observable';
import { usersEpics } from './users.epic';

export const rootEpics: Epic = combineEpics(usersEpics);
