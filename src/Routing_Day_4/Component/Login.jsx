import React from 'react'
import { AuthContext } from '../Context/AuthContext'

export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email: "",
            password:"",
        }
    }

    handleClick = () =>{
       const { email, password} = this.state
       const {checkAuth} = this.context
       checkAuth(email, password) 
    }

    handleChange = (e) =>{
        const { name, value } = e.target
        this.setState({
            [name] : value
        })
    }

    render(){
        return(
            <div>
                <div>Email
                    <input type="text" name="email" onChange={this.handleChange}  placeholder="email"  />
                </div>
                <div>password
                    <input name="password" onChange={this.handleChange} placeholder="password"  />
                </div>
                <div>
                    <button onClick={this.handleClick}>Login</button>
                </div>
            </div>
        )
    }

}

Login.contextType = AuthContext