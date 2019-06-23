
function debounce(ms: number): MethodDecorator {
    let timeoutId: number | null;
    return function (_target: Object, _key: string | symbol, descriptor: PropertyDescriptor): PropertyDescriptor {
        const originalValue: Function = descriptor.value;
        return {
            ...descriptor,
            value: (...args: unknown[]) => {
                timeoutId ? clearTimeout(timeoutId) : null;
                timeoutId = setTimeout(() => {
                    timeoutId = null;
                    originalValue(...args);
                }, ms);
            }
        };
    };
}

function log(_target: Object, _key: string | symbol, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalValue: Function = descriptor.value;
    return {
        ...descriptor,
        value: (...args: unknown[]) => {
            const result: any = originalValue(...args);
            console.log(`Call ${_key.toString()}(${args.join()})=>${result}`);
            return result;
        }
    };
}

class Lib {
    @debounce(1000)
    public getMessage(num: number): void {
        console.log(`${num} TypeScript is awesome!!`);
    }

    @debounce(1000)
    @log
    public sum(a: number, b: number): number {
        return a + b;
    }
}

const lib: Lib = new Lib();
lib.sum(1, 2);
lib.sum(100, 2);
lib.sum(1, 299);
lib.sum(13, 222);
lib.sum(111, 22);
lib.sum(441, 22);
lib.sum(521, 12);
// lib.getMessage(1);
// lib.getMessage(2);
// lib.getMessage(3);
// lib.getMessage(4);
// lib.getMessage(5);
// lib.getMessage(6);
// lib.getMessage(7);

import 'reflect-metadata';

function log(_target: Object, _key: string | symbol, _descriptor: PropertyDescriptor): void {
    console.log(Reflect.getMetadata(('design:type'), _target, _key));
    console.log(Reflect.getMetadata(('design:paramtypes'), _target, _key));
    console.log(Reflect.getMetadata(('design:returntype'), _target, _key));
}

class Lib {

    @log
    public sum(a: number, b: number): string {
        return (a + b).toString();
    }
}

const lib: Lib = new Lib();
lib.sum(1, 2);

import 'reflect-metadata';

function RangeValidation(
    min: number,
    max: number
): ParameterDecorator {
    return (target: Object, key: string | symbol, index: number) => {
        const existingRange: { [key: number]: [number, number] } =
            Reflect.getMetadata('design:range', target, key) || {};
        existingRange[index] = [min, max];
        Reflect.defineMetadata('design:range', existingRange, target, key);
    };
}

function ValidateRange(
    target: Object,
    key: string,
    descriptor: PropertyDescriptor
): PropertyDescriptor {
    const originalValue: Function = descriptor.value;
    return {
        ...descriptor,
        value: (...args: unknown[]) => {
            const existingRange: { [key: number]: [number, number] } =
                Reflect.getMetadata('design:range', target, key) || {};
            for (const k in Object.keys(existingRange)) {
                const range: [number, number] = existingRange[k];
                const realParam: number = args[k] as number;
                if (realParam < range[0] || realParam > range[1]) {
                    throw new Error(`Param of ${key} on position ${k} outside interval [${range[0]}, ${range[1]}]`);
                }
            }
            return originalValue(...args);
        }
    };
}

class MathLib {
    @ValidateRange
    public updatePercentage(
        @RangeValidation(0, 100) newValue: number,
        @RangeValidation(25, 50) oldValue: number
    ): void {
        console.log(newValue, oldValue);
    }
}

const lib: MathLib = new MathLib();
lib.updatePercentage(50, 25);
// lib.updatePercentage(50, 100);
console.log(Reflect.hasMetadata('design:range', lib, 'updatePercentage'));
