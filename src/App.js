import React from 'react';

import { Switch, Route, Redirect } from "react-router-dom"
import Login from './page/Login/Login'
import Reg from './page/Reg/Reg'
import Detail from './page/Detail/Detail'
import KindList from './page/Kind/component/KindList'
import Index from './page/Index/Index'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/reg' component={Reg}></Route>
        <Route path='/detail' component={Detail}></Route>
        <Route path='/kindList' component={KindList}></Route>
        <Route path='/index' component={Index}></Route>
        <Redirect to="/login"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
