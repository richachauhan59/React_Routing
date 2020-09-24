import React from 'react'
import {Link} from 'react-router-dom'


const Links = [
    { to:'./', title:"Home"},
    {to:'/contact', title:"Contact"},
    {to:'/about' , title: "About"},
    {to:'/service', title:"Services Page"},
    {to:'/login', title:'Login Page'}
]

export default class Footer extends React.Component{
  constructor(props){
    super(props)
  }



  render(){
      return(
        <div>
            <footer class="new_footer_area bg_color">
              
        
            </footer>
        </div>
      )
  }
}
