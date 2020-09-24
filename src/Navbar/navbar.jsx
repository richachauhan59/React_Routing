import React from 'react'
import {Link} from 'react-router-dom'


const Links = [
    { to:'./', title:"Home"},
    {to:'/contact', title:"Contact"},
    {to:'/about' , title: "About"},
    {to:'/service', title:"Services Page"},
    {to:'/login', title:'Login Page'}
]

function Navbar() {
    return(
        <div>
            <div style={{marginTop:"2%" ,zIndex:"99", width:"100%", border:"2px solid black", padding:"2%", margin:"0.5%", background:"#B8F0F5", position:"fixed"}}>
                <div style={{float:"left"}}>
                    <img src="https://ml2uyflrktha.i.optimole.com/9INU2Qs-3kd3ar7L/w:170/h:38/q:90/https://zebpay.com/wp-content/uploads/2020/06/logo.png"></img>
                </div>
                <div style={{display:"flex", marginLeft:"70%"}}>
                {Links.map(({to, title}) =>(
                    <Link key={to} style={{padding:10}} to={to}>
                        {title}
                    </Link>
                ))}
                </div>
            </div>
        </div>
        
    )
}

export default Navbar;
  