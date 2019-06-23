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
