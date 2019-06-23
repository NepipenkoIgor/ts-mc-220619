export const SEARCH: string = 'SEARCH';

export function search(payload: string) {
    return {
        type: SEARCH,
        payload
    };
}
