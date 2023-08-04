import {sayHello} from "../src/sayHello-Funtion";

describe('sayHello', function(): void {
    it('should result Hello downy', function () :void {
        expect(sayHello('downy')).toBe('Hello downy')
    });
})