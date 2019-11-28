import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import './navbar.scss'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        gridRow: '2',
        color: 'black',
        gridColumn: 'span 3',
        flexDirection: 'column',
        padding: '0px'
    },
    listItem: {
        borderBottom: '4px solid #ED462F'
    },
}));

export default function Navbar(props) {
    
    const classes = useStyles();
    const openMenu = props.open

    return (
        <div className={`navbar ${classes.root}`} style={{display: openMenu ? null : 'none' }}>
            <List component="nav" className="navbar-basic">
                <ListItem button className={classes.listItem}>
                    <ListItemText  primary="Inicio" />
                </ListItem>
                <ListItem button className="navbar-item">
                    <ListItemText  primary="Nosotros" />
                </ListItem>
                <ListItem button className="navbar-item">
                    <ListItemText  primary="Nuestros Servicios" />
                </ListItem>
                <ListItem button className="navbar-item">
                    <ListItemText  primary="Ferias" />
                </ListItem>
            </List>
            <List component="nav" className="navbar-help">
                <ListItem button>
                    <ListItemText  primary="Blog" />
                </ListItem>
                <ListItem button>
                    <ListItemText  primary="Contacto" />
                </ListItem>
            </List>
        </div>
    )
}