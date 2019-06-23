import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Header from './containers/header';
import Content from './containers/content';

class App extends Component {
    public render(): JSX.Element {
        return <Provider store={store}>
            <React.Fragment>
                <Header/>
                <Content/>
            </React.Fragment>
        </Provider>;
    }
}

const el: HTMLDivElement = document.querySelector('#root') as HTMLDivElement;
ReactDom.render(<App/>, el);
