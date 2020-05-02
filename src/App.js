import React from 'react';
import Login from './view/login/login'
import {Button} from 'antd'
import 'antd/dist/antd.css'; 
import {Route, Link, BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Route path="/home" render={()=>{
        <h1>home page</h1>
      }}/>
      <Route render={()=><h1>没有匹配的</h1>} />

    </BrowserRouter>

  );
}

export default App;
