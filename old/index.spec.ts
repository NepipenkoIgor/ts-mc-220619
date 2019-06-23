import { average } from '../src';

describe('Test average', () => {
    it('should work', () => {
        expect(average(2, '2')).toEqual('AVERAGE IS 2');
    });
})
