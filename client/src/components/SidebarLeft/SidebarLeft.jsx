import '../../css/sidebarleft.css'
import Logo from './Logo.jsx'
import { useState } from 'react'



function SideBarLeft() {

    const [nav, setNav] = useState([
        {
            name:"Home",
            class:"open"
        }, {
            name:"Questions",
            class:"closed"
        }, {
            name:"Tags",
            class:"closed"
        }, {
            name:"Users",
            class:"closed"
        }
    ])
        
    return (
        <div className="sidebar_left">
            <Logo />
            <div className="sidebar_left_sized">

            </div>
            <ul>

                <li className={nav[0].class}>
                    <a href = "#">
                        {nav[0].name}
                    </a>
                </li>
                
                <li className={nav[1].class}>
                    <a href = "#">
                        {nav[1].name}
                    </a>
                </li>
                
                <li className={nav[2].class}>
                    <a href = "#">
                        {nav[2].name}
                    </a>
                </li>
                
                <li className={nav[3].class}>
                    <a href = "#">
                        {nav[3].name}
                    </a>
                </li>

            </ul>
        </div>
    )
}

export default SideBarLeft