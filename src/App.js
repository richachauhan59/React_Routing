import React from 'react';
import { Routing} from './routes/Routing'
// import {Routing} from './Routing_Day_2/Routes_2/Routing'
import {HashRouter} from 'react-router-dom'
import Link from './Routing_Day_4/Pages/Link'
import {Routes} from './Routing_Day_4/Pages/Routes'


function App() {
  return (
    <div className="App">
      <HashRouter>
      <Link />
      <Routes/>
        {/* <Routing/> */}
     </HashRouter>
     
    </div>
  );
}

export default App;
