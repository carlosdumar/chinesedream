import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: '#34363E',
        padding: '50px 15px'
    }
}))

export default function Footers({children}) {
    
    const classes = useStyles();

    return (
        <section className={`footers ${classes.footer}`}>
            {children}
        </section>
    )
}