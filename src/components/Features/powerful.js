import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Link from '@material-ui/core/Link';

import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ComputerIcon from '@material-ui/icons/Computer';
import TranslateIcon from '@material-ui/icons/Translate';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';

import '../../assets/scss/features.scss';

const useStyles = makeStyles(theme => ({
    // link: {
    //     margin: theme.spacing(1),
    //   },
    icon: {
        color: '#ED462F'
    }
}))

export default function Powerful() {
    
    const classes = useStyles();

    return (
        <section className="characteristics">
            <article className="responsive">
                <div className="responsive-image">
                    <ComputerIcon fontSize="large" className={classes.icon}/>
                </div>
                <div className="responsive-main">
                    <h3>100% Responsive</h3>
                    <p>Lorem ipsum dolor sit amet sit legimus copiosae instructior ei ut vix denique fierentis ea saperet inimicu ut qui dolor oratio mnesarchum.</p>
                    <Link href="#">Read More<ArrowRightIcon/></Link>
                </div>
            </article>
            <article className="powerful">
                <div className="powerful-image">
                    <TranslateIcon fontSize="large" className={classes.icon}/>
                </div>
                <div className="powerful-main">
                    <h3>Powerful Features</h3>
                    <p>Lorem ipsum dolor sit amet sit legimus copiosae instructior ei ut vix denique fierentis ea saperet inimicu ut qui dolor oratio mnesarchum.</p>
                    <Link href="#">Read More<ArrowRightIcon/></Link>
                </div>
            </article>
            <article className="support">
                <div className="support-image">
                    <LiveHelpIcon fontSize="large" className={classes.icon}/>
                </div>
                <div className="support-main">
                    <h3>Customer Support</h3>
                    <p>Lorem ipsum dolor sit amet sit legimus copiosae instructior ei ut vix denique fierentis ea saperet inimicu ut qui dolor oratio mnesarchum.</p>
                    <Link href="#">Read More<ArrowRightIcon/></Link>
                </div>
            </article>
        </section>
    )
}