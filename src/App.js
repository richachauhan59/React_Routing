import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { Routing} from './routes/Routing'
import {Routing} from './Routing_Day_2/Routes_2/Routing'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routing/>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
