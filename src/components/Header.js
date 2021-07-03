import React from 'react'
import {AppBar, Toolbar} from '@material-ui/core'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position="static">
        <Toolbar>
            <h3>GlobalState</h3>
            <Link to={'/'}>
            <a style={{color: "yellow"}}>Top</a>
            </Link>

            <Link to={'/Second'}> 
            <a style={{color: "yellow"}}>Second</a>
            </Link>
        </Toolbar>
        </AppBar>
    );
}
export default Header