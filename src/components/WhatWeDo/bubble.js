import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

import Link from '@material-ui/core/Link';

import '../../assets/scss/bubble.scss'

const useStyles = makeStyles(theme => ({

}))

export default function Bubble(props) {
    
    const classes = useStyles();
    const { bubbleTitle, bubbleText } = props;

    return (
        <div className="bubble">
            <div className="circle circle-big">
                <div className="circle circle-mid">
                    <div className="circle circle-small">
                        {props.children}
                    </div>
                </div>
            </div>
            <div className="bubble-description">
                <Link href="#">
                    <Typography variant="h5" gutterBottom>
                        {bubbleTitle}
                    </Typography>
                </Link>
                <p>{bubbleText}</p>
            </div>
        </div>
    )
}