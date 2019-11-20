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
                <img className={classes.image} src="../src/assets/images/woman.jpg" />
            </div>
            <div className="about-us__main">
                <h2 className="title">About <span className={classes.colorChina}>Us</span></h2>
                <p className="subtitle">Somos una empresa joven, perteneciente y operada por profesionales de la industria comercial.</p>
                <ul className="list">
                    <li className="list__item">  
                        <CheckIcon className={classes.colorChina} style={{marginRight: '10px'}}/>
                        Somos agentes comisionistas que conectan a los comerciantes en Sudamérica con los proveedores en China.
                    </li>
                    <li className="list__item">  
                        <CheckIcon className={classes.colorChina} style={{marginRight: '10px'}}/>
                        Nos esforzamos por dar un servicio de excelencia al minimizar los altos cargos que pagan los comerciantes al comerciar con China debido a problemas de idioma, barreras culturales, costos de viaje y problemas de calidad.
                    </li>
                    <li className="list__item">  
                        <CheckIcon className={classes.colorChina} style={{marginRight: '10px'}}/>
                        Cuando trata con nosotros, está aprovechando nuestra experiencia como hablantes nativos de chino y hablantes nativos de español con una amplia red de proveedores en China.
                    </li>
                    <li className="list__item">  
                        <CheckIcon className={classes.colorChina} style={{marginRight: '10px'}}/>
                        Ponemos en primer lugar el interés de nuestros clientes y nos aseguramos de cumplir lo que prometemos a precios competitivos.
                    </li>
                </ul>
                <Link className="learn-more" href="#">Learn More<ArrowRightIcon /></Link>
            </div>
        </section>
    )
}