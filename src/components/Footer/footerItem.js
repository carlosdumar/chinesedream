import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';

import '../../assets/scss/footer.scss'

const useStyles = makeStyles(theme => ({
    tipografy: {
         color: '#fff'
    }
}))

export default function FooterItem(props) {

    const classes = useStyles();
    const { title, description, links } = props;

    return (
        <article className="footer">
            <Typography className={`footer-title ${classes.tipografy}`} variant="h5">
                { title }
            </Typography>
            <hr />
            <p className="footer-description"> { description } </p>
            {
                links.map(item => (
                    <div className="footer-link">
                        <Link className="link" href={item.url}>{item.name}</Link>
                        <span className="date">{item.date}</span>
                    </div> 
                ))
            }
        </article>
    )
}