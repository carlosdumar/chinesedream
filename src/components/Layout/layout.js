import React from 'react';
import Header from '../../containers/header/header';
import Footer from '../../containers/footer/footer';

const Layout = ({ children })  => (
    <div className="App">
        <Header />
        {children}
        <Footer />
    </div>
)

export default Layout;