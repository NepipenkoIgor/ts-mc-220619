import React, { ChangeEvent, Component } from 'react';
import './style.css';

export interface IProps {
    search(term: string): void;
}

function debounce(ms: number): MethodDecorator {
    let timeoutId: number | null;
    return function (_target: Object, _key: string | symbol, descriptor: PropertyDescriptor): PropertyDescriptor {
        const originalValue: Function = descriptor.value;
        return {
            ...descriptor,
            value(...args: unknown[]) {
                timeoutId ? clearTimeout(timeoutId) : null;
                timeoutId = setTimeout(() => {
                    timeoutId = null;
                    originalValue.apply(this, args);
                }, ms);
            }
        };
    };
}

export class Header extends Component<IProps> {
    @debounce(300)
    public onSearch(term: string): void {
        this.props.search(term);
    }

    public render(): JSX.Element {
        return <div className='row header'>
            Search <input type='text'
                          onChange={(e: ChangeEvent<HTMLInputElement>) => this.onSearch.call(this, e.target.value)}/>
        </div>;
    }
}
