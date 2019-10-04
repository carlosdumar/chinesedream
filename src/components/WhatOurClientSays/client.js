import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import Link from '@material-ui/core/Link';
import { Typography } from '@material-ui/core';

import '../../assets/scss/client.scss';

const  useStyles = makeStyles({
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60
    },
    grid: {
        width: 'unset',
    }
})

export default function Client(props) {

    const classes = useStyles();

    return (
        <div className="client">
            <div className="client-testimonial">
                <p>Lorem ipsum dolor sit amet sit legimus copiosae instructior ei ut vix denique fierentis ea saperet inimicu ut qui dolor oratio mnesarchum ea utamur impetus fuisset.</p>
            </div>
            <div className="arrow-down"></div>
            <div className="client-info">
                <Grid container={true} alignItems="center" className={classes.grid}>
                    <Avatar alt="Remy Sharp" src="src/assets/images/avatar.png" className={classes.bigAvatar} />
                </Grid>
                <div className="info">
                    <Typography  variant="h5">Lorem Ipsum</Typography>
                    <span>Manager</span>
                </div>
            </div>  
        </div>
    )
}