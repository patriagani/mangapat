import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './views/Home'
import Detail from './views/Detail'
import Chapter from './views/Chapter'
import Navbar from './components/Navbar'



function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Router>
          <Switch>
            <Route path="/detail/:mangaId/chapter/:chapterId/:page" component={Chapter}/>
            <Route path="/detail/:mangaId" component={Detail}/>
            <Route path="/" component={Home}/>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
