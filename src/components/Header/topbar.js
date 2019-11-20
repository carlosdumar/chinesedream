import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import './topbar.scss';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(1, .5),
      backgroundColor: '#ED462F',
    },
    link: {
        margin: theme.spacing(1),
        color: '#FDF733',
    }
}));
export default function TopBar() {

    const classes = useStyles();

    return (
        <Paper 
            component="div" 
            square={true} 
            className={`topbar ${classes.root}`}
        >
            <Typography className="topbar-legal">
                <Link href="#" className={classes.link} alt="Ferias">
                    Blog
                </Link>
            </Typography>
            <Typography className="topbar-support">
                <Link href="#" className={classes.link} alt="Contact">
                    Contacto
                </Link>
            </Typography>
        </Paper>
    )
}