import React from 'react'
import {Route} from 'react-router-dom'
import Login from '../Component/Login'
import Home from '../Component/Home'
import PrivateRoutes from '../PrivateRoutes/Private'

class Routes extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }


    render(){
        return(
            <div>
                <Route path="/" exact render={(props) => <Home {...props} />}></Route>
                <Route path="/login" render={(props) => <Login {...props} />}></Route>
                <Route path="/dashboard" render={(props) => <PrivateRoutes {...props} />}></Route>
                {/* <Route path='/' /> */}
            </div>
        )
    }
}
export {Routes}