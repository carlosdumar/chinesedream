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
        gridColumn: 'span 3'
    },
    listItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'unset'
    },
}));

export default function Navbar(props) {
    
    const classes = useStyles();
    const openMenu = props.open

    return (
        <div className={`navbar ${classes.root}`} style={{display: openMenu ? null : 'none' }}>
            <List component="nav" className="navbar-basic">
                <ListItem button>
                    <ListItemText  primary="Inicio" />
                </ListItem>
                <ListItem button>
                    <ListItemText  primary="Nosotros" />
                </ListItem>
                <ListItem button>
                    <ListItemText  primary="Reserva Online" />
                </ListItem>
            </List>
            <List component="nav" className="navbar-help">
                <ListItem button>
                        <ListItemText  primary="Clientes" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText  primary="Contacto" />
                </ListItem>
            </List>
        </div>
    )
}