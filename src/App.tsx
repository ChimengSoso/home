import './App.css';
import React from 'react';
import {Home} from "./component/home/Home";
import {Donate} from "./component/donation/Donate";

type Prop = {}

const App: React.FC<Prop> = () => {
    return (<Donate/>);
}

export default App;
