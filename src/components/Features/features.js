import React from 'react';
import { makeStyles } from '@material-ui/styles';

import '../../assets/scss/features.scss';

const useStyles = makeStyles(theme => ({
    icon: {
        color: '#ED462F'
    }
}))

export default function Features({children}) {
    
    const classes = useStyles();

    return (
        <section className="features">
            {children}
        </section>
    )
}