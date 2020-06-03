import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div to='/' className='sidebar'>
            <ul className="side-nav">
                <li className="side-nav__item">
                    <NavLink to='/' className='side-nav__link'>
                        svg
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
