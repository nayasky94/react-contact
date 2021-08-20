import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import App2 from './components/App2';

import {createStore} from 'redux';
import reducers from './reducers';

import {Provider} from 'react-redux';

const store = createStore(reducers);
 
const rootElement = document.getElementById('root');
//ReactDOM.render(<App />, rootElement);
ReactDOM.render(
    <Provider store={store}>
        <App2 />
    </Provider>
    , rootElement
);