import React, { Component } from 'react';
import Bubble from '../../components/WhatWeDo/bubble';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import BrushIcon from '@material-ui/icons/Brush';
import SettingsIcon from '@material-ui/icons/Settings';
import Typography from '@material-ui/core/Typography';

import '../../assets/scss/whatwedo.scss';

class WhatWeDoContainer extends Component {
    render() {
        
        const text = "Lorem ipsum dolor sit amet sit legimus copiosae instructior ei ut vix denique fierentis ea saperet inimicu ut qui dolor oratio mnesarchum";

        return (
            <div className="what-we-do">
                <Typography variant="h4" gutterBottom>
                    What <span>We Do</span>
                </Typography>
                <p className="what-we-do__description">Lorem ipsum dolor sit amet sit legimus copiosae instructior ei ut vix denique fierentis ea saperet inimicu ut qui dolor oratio mnesarchum ea utamur impetus fuisset nam nostrud euismod volumus ne mei.</p>
                <div className="what-we-do__bubble">
                    <Bubble bubbleTitle="Idea" bubbleText={text} >
                        <EmojiObjectsIcon className="circle-image" fontSize="large"/>
                    </Bubble>
                    <Bubble bubbleTitle="Concept" bubbleText={text} >
                        <CloudDownloadIcon className="circle-image" fontSize="large"/>
                    </Bubble>
                    <Bubble bubbleTitle="Design" bubbleText={text} >
                        <BrushIcon className="circle-image" fontSize="large"/>
                    </Bubble>
                    <Bubble bubbleTitle="Develop" bubbleText={text} >
                        <SettingsIcon className="circle-image" fontSize="large"/>
                    </Bubble>
                </div>               
            </div>
        )
    }
}

export default WhatWeDoContainer;