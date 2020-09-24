import React from 'react'
import {products} from './Data'
const AppContext = React.createContext()

class ContextProvider extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data: products
        }
    }

    render(){
        return(
            <AppContext.Provider value={{data: this.state.data}}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}
export {AppContext , ContextProvider}


