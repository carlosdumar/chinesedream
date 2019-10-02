import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Link from '@material-ui/core/Link';
import CheckIcon from '@material-ui/icons/Check';

import '../../assets/scss/aboutus.scss'

const useStyles = makeStyles(theme => ({
    image: {
        width: '100%'
    },
    colorChina: {
        color: '#ED462F'
    },
    check: {
        paddingLeft: '10px'
    }
}))

export default function AboutUs() {
    
    const classes = useStyles();

    return (
        <section className="about-us">
            <div className="about-us__image">
                <img className={classes.image} src="/src/assets/images/woman.jpg" />
            </div>
            <div className="about-us__main">
                <h2 className="title">About <span className={classes.colorChina}>Us</span></h2>
                <p className="subtitle">Lorem ipsum dolor sit amet sit legimus copiosae instructior ei ut.</p>
                <ul className="list">
                    <li className="list__item">  
                        <CheckIcon className={classes.colorChina} style={{marginRight: '10px'}}/>
                        Vix denique fierentis ea saperet inimicu ut qui dolor oratio mnesarchum.
                    </li>
                    <li className="list__item">  
                        <CheckIcon className={classes.colorChina} style={{marginRight: '10px'}}/>
                        legimus copiosae instructior ei ut vix denique fierentis atqui mucius consequat ad pro.
                    </li>
                    <li className="list__item">  
                        <CheckIcon className={classes.colorChina} style={{marginRight: '10px'}}/>
                        Ea saperet inimicu ut qui dolor oratio maiestatis ubique mnesarchum.
                    </li>
                    <li className="list__item">  
                        <CheckIcon className={classes.colorChina} style={{marginRight: '10px'}}/>
                        Sanctus voluptatibus et per illum noluisse facilisis quo atqui mucius ad pro.
                    </li>
                    <li className="list__item">  
                        <CheckIcon className={classes.colorChina} style={{marginRight: '10px'}}/>
                        At illum noluisse facilisis quo te dictas epicurei suavitate qui his ad.
                    </li>
                    <li className="list__item">  
                        <CheckIcon className={classes.colorChina} style={{marginRight: '10px'}}/>
                        Tantas propriae mediocritatem id vix qui everti efficiantur an ocurreret consetetur.
                    </li>
                </ul>
                <Link className="learn-more" href="#">Learn More<ArrowRightIcon /></Link>
            </div>
        </section>
    )
}