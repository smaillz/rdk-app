import * as React from 'react';
import { text } from './temp';
import { hot } from 'react-hot-loader';
import './styles'

const Hello = (props: any) => (
    <div className="container">
        {text}
    </div>
);

export default hot(module)(Hello);