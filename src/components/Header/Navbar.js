import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        gridRow: '2',
        color: 'black'
    },
    listItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'unset'
    },
}));

export default function Navbar(props) {
    
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List component="nav" className="navbar">
                <ListItem button>
                    <ListItemText  primary="Inicio" />
                </ListItem>
                <ListItem button>
                    <ListItemText  primary="Nosotros" />
                </ListItem>
                <ListItem button>
                    <ListItemText  primary="Reserva Online" />
                </ListItem>
                <ListItem button>
                    <ListItemText  primary="Clientes" />
                </ListItem>
                <ListItem button >
                    <ListItemText  primary="Contacto" />
                </ListItem>
            </List>
        </div>
    )
}