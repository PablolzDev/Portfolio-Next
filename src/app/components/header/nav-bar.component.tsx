import React from 'react'
import NavBarItemComponent from './nav-bar-item.component'


const NavItems = [
    {path: "/", title: "Home"},
    {path: "/about", title: "Who I Am"},
    {path: "/projects", title: "Projects"},
    {path: "/contact", title: "Contact"}
 
]

    


export default function Nav() {
  return (
    <nav className='flex items-center space-x-8'>
        {NavItems.map((item, key) =>(
            <NavBarItemComponent path={item.path} title={item.title} key={key} />
        ))}
    </nav>
  )
}
