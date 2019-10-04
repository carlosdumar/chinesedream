import React, { Component } from 'react';
import Client from '../../components/WhatOurClientSays/client';
import { Typography } from '@material-ui/core';
import '../../assets/scss/whatourclientsays.scss';


class WhatOurClientSays extends Component {
    render() {
        return (
            <section className="testimonial">
                <div className="testimonial-description">
                    <Typography className="title" variant="h4">
                        What Our <span>Client Says</span>
                    </Typography>
                    <p className="description">Lorem ipsum dolor sit amet sit legimus copiosae instructior ei ut vix denique fierentis ea saperet inimicu ut qui dolor oratio mnesarchum ea utamur impetus fuisset nam nostrud euismod volumus ne mei.</p>
                </div>
                <div className="testimonial-clients">
                    <Client />
                    <Client />
                    <Client />
                </div>
            </section>
        )
    }
}

export default WhatOurClientSays;