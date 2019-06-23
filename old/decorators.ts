
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
