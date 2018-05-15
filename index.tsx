import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './src';

const App  = (props: any) => (
    <div>
        <Hello/>
    </div>
);

ReactDOM.render(<App/>, document.getElementById('root'));