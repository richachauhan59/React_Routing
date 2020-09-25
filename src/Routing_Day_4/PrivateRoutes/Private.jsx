import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Dashboard from '../Component/Dashboard'
import Settings from '../Component/Settings'
import {AuthContext} from '../Context/AuthContext'


export default class Private extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        
        return(
            <AuthContext.Consumer>
                    {({ isAuth }) => {
                        if (!isAuth) {
                            return <Redirect to="/login" />
                        }
                        else {
                            return (
                                <>
                                    <Route path="/dashboard" exact render={(props) => <Dashboard {...props} />} />
                                    <Route path="/dashboard/settings" render={(props) => <Settings {...props} />} />
                                </>
                            )
                        }
                    }}
                </AuthContext.Consumer>
        )
    }
}

