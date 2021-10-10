import logo from './logo.svg';
// 已写模板
import Home from './View/Home'
// 空模板
import Template from './View/Template'

import React, { Component } from 'react';
import { withRouter, NavLink, Switch, Redirect, Route } from 'react-router-dom';

class App extends Component{
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/template" component={Template} />
      </Switch>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       {/* 已写模板 */}
//       {/* <Home /> */}
//       {/*空模板 */}
//       <Template />
//     </div>
//   );
// }

export default App;
