import React from 'react'
import axios from 'axios'



export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email: "",
            password:""
        }
    }

    render(){
        const {isAuth} = this.contest
        const {email, password} = this.state
        return(
            <div>

            </div>
        )
    }

}