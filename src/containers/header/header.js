import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import AppBar from '@material-ui/core/AppBar';
import Navbar from '../../components/Header/Navbar';
import { Toolbar } from '@material-ui/core';

import logo from '../../assets/images/chinaentumano.png';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      height: '90px',

    },
    menuButton: {
      marginRight: theme.spacing(2),
      gridColumn: '3',
      margin: '0px',
      padding: '0px'
    },
    title: {
      flexGrow: 1,
    },
    image: {
        height: '90px'
    },
    toolBar: {
        display: 'grid',
        gridTemplateColumns: 'auto auto 50px',
        backgroundColor: 'white'
    }
  }));
  


  export default function Header() {
    
    const classes = useStyles();
    const [toggleIconMenu, setToggleIconMenu ] = useState(true);
    const [openMenu, setOpenMenu] = useState(false);

    function handleToggleIconMenu(e) {
        setToggleIconMenu(e.target.id === "menuIcon" ? false : true );
        setOpenMenu(e.target.id === "menuIcon" ? true : false )
    }
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolBar}>
                    <img src={logo} alt="Website Logo" className={classes.image}/>
                    {openMenu ? <Navbar /> : null }
                    <IconButton 
                        edge="start" 
                        className={classes.menuButton} 
                        onClick={handleToggleIconMenu}
                    >
                        {toggleIconMenu ? <MenuIcon id="menuIcon"/> : <CloseIcon />}

                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}
