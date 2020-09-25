import React from 'react'
import axios from 'axios'
const AuthContext = React.createContext()

class ContextProvider extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isAuth: false
        }
    }

    checkAuth = (email, password) =>{
        axios.post("https://reqres.in/api/login",
            {
                email: email,
                password: password
            })
            .then((res) => {
                console.log(res)
                this.setState({
                    isAuth: true,
                })
            })
            .catch((err) => console.log(err))
    }
    

    render(){
        const {isAuth } = this.state
        const { checkAuth} = this
        return(
            <AuthContext.Provider value={{isAuth, checkAuth}} >
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}
export {AuthContext , ContextProvider}
