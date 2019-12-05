import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout/layout';
import Home from '../containers/home/home';
// import Blog from '../containers/blog/blog';
// import OurServices from '../containers/ourservices';
// import AboutUs from '../containers/aboutus/aboutus';
import NotFound from '../containers/not-found/notfound';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                {/* {/* <Route exact path="/blog" component={Blog} /> */}
                <Route exact path="/nuestros-servicios" component={OurServices} />
                <Route exact path="/about-us" component={AboutUs} /> */}
                <Route component={NotFound} />                 
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default App;