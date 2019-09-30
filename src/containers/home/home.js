import React, { Component } from 'react';
import Header from '../header/header';
import Carrousel from '../../components/Carrousel/carrousel';
import FeaturesContainer from '../../containers/features/features';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Carrousel />
                <FeaturesContainer />
            </div> 
        )
    }
}

export default Home;