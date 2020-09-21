import React from 'react'
import {Route} from 'react-router-dom'
import Navbar from '../Navbar/navbar'
import {Home} from './Home'
import {Contact} from './Contact'
import {Services} from './Service'
import {Login} from './Login'
import {About} from './About'

 

//  Home  Page- `/`
// Contact Page- `/contact`
// About Page- `/about-us`
// Services Page- `/services`
// Login Page- `/login`


 const Routing = () =>{
    return(
        <div>
            <Route path='/' render={() => <Navbar/>} />
            <Route path='/' exact render={() => <Home/>} />
            <Route path='/about'  render={() => <About/>} />
            <Route path='/contact'  render={() => <Contact/>} />
            <Route path='/service' render={() => <Services/>}  />
            <Route path='/login' render={() => <Login/>}  />
        </div>
    )
}

export  {Routing}