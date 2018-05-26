import { sum } from '../src/temp';

describe('Testing function', () => {
    it(' test sum', () => {
        expect(sum(1,2)).toBe(3);
    });
});
