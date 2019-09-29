import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { border, fontWeight } from '@material-ui/system';

import './carrousel.scss';

const useStyles = makeStyles(theme => ({
    linkButton: {
        backGroundColor: "red",
        border: "1px solid #ED462F",
        color: '#ED462F',
        width: '150px',
        height: '50px',
        fontWeight: '600',
        textTransform: 'uppercase'
    },
    imageCarrousel: {
        // opacity: '0.5'
        height: '300px'
    }
}));

export default function Carrousel() {
    
    const classes = useStyles();

    return (
        <Carousel prevIcon={<ArrowBackIosIcon />} nextIcon={<ArrowForwardIosIcon />}>
            <Carousel.Item>
                <img
                    className={`${classes.imageCarrousel} d-block w-100`}
                    alt="First slide"
                    src="src/assets/images/china_landscape.jpeg"
                />
                <Carousel.Caption>
                    <h3>PROVIDING THE <span>HIGHEST</span>LOREM</h3>
                    <p>Lorem ipsum dolor sit amet sit legimus copiosae instructior eiut vix denique fierentis ea saperet inimicu utqui dolor oratio mnesarchum.</p>
                    <Link
                        className={classes.linkButton}
                        component="button"
                        variant="body2"
                        onClick={() => {
                            alert("I'm a button.");
                        }}
                    >
                        Learn More
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={`${classes.imageCarrousel} d-block w-100`}
                    // className="d-block w-100"
                    alt="Second slide"
                    src="src/assets/images/chinaCity.jpg"
                />
                <Carousel.Caption>
                    <h3>PROVIDING THE <span>HIGHEST</span>LOREM</h3>
                    <p>Lorem ipsum dolor sit amet sit legimus copiosae instructior eiut vix denique fierentis ea saperet inimicu utqui dolor oratio mnesarchum.</p>
                    <Link
                        className={classes.linkButton}
                        component="button"
                        variant="body2"
                        onClick={() => {
                            alert("I'm a button.");
                        }}
                    >
                        Learn More
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={`${classes.imageCarrousel} d-block w-100`}
                    // className="d-block w-100"
                    alt="Second slide"
                    src="src/assets/images/dragon.jpg"
                />
                <Carousel.Caption>
                    <h3>PROVIDING THE <span>HIGHEST</span>LOREM</h3>
                    <p>Lorem ipsum dolor sit amet sit legimus copiosae instructior eiut vix denique fierentis ea saperet inimicu utqui dolor oratio mnesarchum.</p>
                    <Link
                        className={classes.linkButton}
                        component="button"
                        variant="body2"
                        onClick={() => {
                            alert("I'm a button.");
                        }}
                    >
                        Learn More
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}