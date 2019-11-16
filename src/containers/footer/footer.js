import React, { useSate, Component } from 'react';

import Footers from '../../components/Footer/footers';
import FooterItem from '../../components/Footer/footerItem';

class Footer extends Component {
    state = {
        
    }

    render() {

        const descriptionFooter = "Lorem ipsum dolor sit amet sit legimus copiosae instructior ei ut vix denique fierentis ea saperet inimicu ut qui dolor oratio mnesarchum. "

        return (
            <Footers>
                <FooterItem 
                    title="Address"
                    description={descriptionFooter}
                    links={[{ name: 'Learn More', url: '#'} ]}
                />
                <FooterItem 
                    title="Useful Links"
                    description={null}
                    links={[
                        { name: 'About Us', url: '/aboutus' }, 
                        { name: 'Features', url: '/features' },
                        { name: 'Portfolio', url: '/portfolio'},
                        { name: 'Contact', url: '/contact'},
                        { name: 'Sign In', url: '/signin'},
                        { name: 'Sign Up', url: '/signup'} 
                    ]}
                />
                <FooterItem 
                    title="Community"
                    description={null}
                    links={[
                        { name: 'Blog', url: '/blog' }, 
                        { name: 'Forum', url: '/forum' },
                        { name: 'Free Goods', url: '/freegoods'},
                    ]}
                />
                <FooterItem 
                    title="Recent Posts"
                    description={null}
                    links={[
                        { name: 'LOREM IPSUM DOLOR SIT AMET', url: '/#', date:'May 25, 2045' }, 
                        { name: 'LOREM IPSUM DOLOR SIT AMET', url: '/forum', date:'May 25, 2045'},
                        { name: 'LOREM IPSUM DOLOR SIT AMET', url: '/freegoods', date:'May 25, 2045'},
                    ]}
                />
            </Footers>
        )
    }
}

export default Footer;