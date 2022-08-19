import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import {Home} from "./component/home/Home";
import {Donate} from "./component/donation/Donate";

type Prop = {}

const App: React.FC<Prop> = () => {
    return (<>
        <Routes>
            <Route path={"/cm"} element={<Home/>}/>
            <Route path={"/donate"} element={<Donate/>}/>
        </Routes>
    </>);
}

export default App;
