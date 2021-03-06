import React, { Component } from 'react';
import Header from '../header/header';
import Carrousel from '../../components/Carrousel/carrousel';
import FeaturesContainer from '../../containers/features/features';
import AboutUsContainer from '../../containers/aboutus/aboutus';
import WhatWeDoContainer from '../../containers/whatwedo/whatwedo';
import Divider from '@material-ui/core/Divider';
import WhatOurClientSays from '../whatourclientsays/whatourclientsays';
import Footer from '../../containers/footer/footer';

import '../../assets/scss/home.scss';

const Home = () => (
    <div className="home">
        <Carrousel />
        <FeaturesContainer />
        <AboutUsContainer />
        <Divider />
        <WhatWeDoContainer />
        <WhatOurClientSays/>
    </div> 
)

export default Home;