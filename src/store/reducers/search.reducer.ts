import { AnyAction } from 'redux';
import { SEARCH } from '../actions/search.action';


const initialState: string = '';

export function searchReducer(state: string = initialState, actions: AnyAction): string {
    switch (actions.type) {
        case SEARCH: {
            return actions.payload;
        }
        default: {
            return state;
        }
    }
}
