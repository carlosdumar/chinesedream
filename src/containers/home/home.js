import React, { Component } from 'react';
import Header from '../header/header';
import Carrousel from '../../components/Carrousel/carrousel';
import FeaturesContainer from '../../containers/features/features';
import AboutUsContainer from '../../containers/aboutus/aboutus';
import WhatWeDoContainer from '../../containers/whatwedo/whatwedo';
import Divider from '@material-ui/core/Divider';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Carrousel />
                <FeaturesContainer />
                <AboutUsContainer />
                <Divider sytle={{ width: '70%', marginLeft: 'auto', marginRight: 'auto' }}/>
                <WhatWeDoContainer />
            </div> 
        )
    }
}

export default Home;