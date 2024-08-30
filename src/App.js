import './App.css';
import React from 'react';
import NavBar from './NavBar';
import News from './Components/News';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

const App=()=>{

const pagesize=5

    return (
      <Router>
        <div>
          <NavBar/>
          <Routes>
            <Route exact path='/' element={<News key={"general"} pageSize={ pagesize} country={"in"} category={"general"}  headings={"general"}/>}/>
            <Route exact path='/business' element={<News key={"business"} pageSize={ pagesize} country={"in"} category={"business"} headings={"Business"}/>}/>
            <Route exact path='/entertainment' element={<News key={"entertainment"} pageSize={ pagesize} country={"in"} category={"entertainment"} headings={"Entertainment"}/>}/>
            <Route exact path='/general' element={<News key={"general"} pageSize={ pagesize} country={"in"} category={"general"} headings={"General"}/>}/>
            <Route exact path='/health' element={<News key={"health"} pageSize={ pagesize} country={"in"} category={"health"} headings={"Health"}/>}/>
            <Route exact path='/science' element={<News key={"science"} pageSize={ pagesize} country={"in"} category={"science"} headings={"Science"}/>}/>
            <Route exact path='/sports' element={<News key={"sports"} pageSize={ pagesize} country={"in"} category={"sports"} headings={"Sports"}/>}/>
            <Route exact path='/technology' element={<News key={"technology"} pageSize={ pagesize} country={"in"} category={"technology"} headings={"Technology"}/>}/>
          </Routes>
        </div>
      </Router>
    );
}

export default App;
