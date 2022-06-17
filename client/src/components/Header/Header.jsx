// import '../../css/header.css'
import {IconButton} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
// import Logo from './Logo.jsx'
import Auth from './Auth.jsx'

function Header() {
    return (
        <div className="header">
            {/* <Logo /> */}
            <div className="header_searchSection">
                <input type="text" className="header_search" placeholder='Search a question'/>
                <IconButton>
                    <SearchIcon />
                </IconButton>
            </div>
            <Auth />
        </div>
    )
}

export default Header