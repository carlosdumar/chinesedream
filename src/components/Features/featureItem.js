import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ComputerIcon from '@material-ui/icons/Computer';
import TranslateIcon from '@material-ui/icons/Translate';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    icon: {
        color: '#ED462F'
    }
}))

export default function FeautureItem(props) {

    const classes = useStyles();
    const { iconSelected } = props;
    let icon = 'computerIcon';

    if(iconSelected === 'computerIcon')
    {
        icon  = <ComputerIcon fontSize="large" className={classes.icon}/>  
    } 
    else if(iconSelected === 'translateIcon')
    {
        icon  = <TranslateIcon fontSize="large" className={classes.icon}/>  
    }
    else if (iconSelected === 'livehelpIcon')
    {
        icon  = <LiveHelpIcon fontSize="large" className={classes.icon}/>  
    }
    return (
        <article className="feature">
            <div className="feature-image">
                {icon}
            </div>
            <div className="feature-main">
                <h3>100% Responsive</h3>
                <p>Lorem ipsum dolor sit amet sit legimus copiosae instructior ei ut vix denique fierentis ea saperet inimicu ut qui dolor oratio mnesarchum.</p>
                <Link href="#">Read More<ArrowRightIcon/></Link>
            </div>
            <div className="feature-image">
                {icon}
            </div>
            <div className="feature-main">
                <h3>POWERFUL FEATURES</h3>
                <p>Lorem ipsum dolor sit amet sit legimus copiosae instructior ei ut vix denique fierentis ea saperet inimicu ut qui dolor oratio mnesarchum.</p>
                <Link href="#">Read More<ArrowRightIcon/></Link>
            </div>
            <div className="feature-image">
                {icon}
            </div>
            <div className="feature-main">
                <h3>CUSTOMER SUPPORT</h3>
                <p>Lorem ipsum dolor sit amet sit legimus copiosae instructior ei ut vix denique fierentis ea saperet inimicu ut qui dolor oratio mnesarchum.</p>
                <Link href="#">Read More<ArrowRightIcon/></Link>
            </div>
        </article>
    )
}