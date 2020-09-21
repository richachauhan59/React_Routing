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
            <div style={{display:"flex"}}>
            {Links.map(({to, title}) =>(
                <Link key={to} style={{padding:10}} to={to}>
                    {title}
                </Link>
            ))}
             </div>
        </div>
    )
}

export default Navbar;
  