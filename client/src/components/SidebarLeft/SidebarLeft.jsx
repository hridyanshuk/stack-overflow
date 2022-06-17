// import '../../css/sidebarleft.css'
import Logo from './Logo.jsx'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'


function SideBarLeft() {
    const location = useLocation()
    const [currentNav, setCurrentNav] = useState(-1)
    const [nav, setNav] = useState([
        {
            name:"Home",
            class:"closed",
            link:'home',
            key: 0
        }, {
            name:"Questions",
            class:"closed",
            link:'questions',
            key: 1
        }, {
            name:"Tags",
            class:"closed",
            link:'tags',
            key: 2
        }, {
            name:"Users",
            class:"closed",
            link:'users',
            key: 3
        }
    ])

    useEffect(() => {
        var links = nav;
        links.map( (link) => {
            if("/main/" + link.link === location.pathname) {
                link.class = "open"
                setCurrentNav(link.key)
            }
            else {
                link.class = "close"
            }
            return link
        })
        setNav(links)
        console.log(nav)
    }, [nav, location.pathname])
    
    function highlight(index) {
        var links = nav;
        links[currentNav].class = "closed";
        links[index].class = "open"
        setCurrentNav(index)
        setNav(links)
    }

    return (
        <div className="sidebar_left">
            <Logo />
            <div className="sidebar_left_content">
                {console.log("Done")}
                <div className="sidebar_left_sized" />
                <ul>
                    {nav.map((link) => {
                        return (
                            <li key={link.key} className={link.class}>
                                <Link  to = {link.link} onClick = {() => highlight(link.key)}>
                                    {link.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
                
    )
}

export default SideBarLeft