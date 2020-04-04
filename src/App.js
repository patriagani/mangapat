import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './views/Home'
import Detail from './views/Detail'
import About from './views/About'
import FeaturedMangas from './views/FeaturedMangas'
import PrivacyPolicy from './views/PrivacyPolicy'
import Chapter from './views/Chapter'
import Navbar from './components/Navbar'
import Footer from './components/Footer'



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <br/>
        <div className="content">
          <Switch>
            <Route path="/detail/:mangaId/chapter/:chapterId/:page" component={Chapter}/>
            <Route path="/detail/:mangaId" component={Detail}/>
            <Route path="/featured-mangas" component={FeaturedMangas}/>
            <Route path="/privacy-policy" component={PrivacyPolicy}/>
            <Route path="/about" component={About}/>
            <Route path="/" component={Home}/>
          </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
