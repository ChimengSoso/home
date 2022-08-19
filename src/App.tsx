import './App.css';
import {Col, Row} from 'antd'
import React from 'react';

type Prop = {

}

const App:React.FC<Prop> = () => {
    return (
        <div className="App">
            <header className="App-header">
                <b><code>Hello <b id="word-world">World</b></code></b>
            </header>
        </div>
    );
}

export default App;
