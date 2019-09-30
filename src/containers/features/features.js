import React, {Component} from 'react'
import Features from '../../components/Features/features'
import FeaturesItem from '../../components/Features/featureItem'

class FeaturesContainer extends Component {
    state = {
        icons: {
            computerIcon: 'computerIcon',
            translateIcon: 'translateIcon',
            livehelpIcon: 'livehelpIcon'
        }
    }
    render() {
        
        const { computerIcon, translateIcon, livehelpIcon } = this.state.icons;

        return (
            <Features>
                <FeaturesItem iconSelected={computerIcon} />
                <FeaturesItem iconSelected={translateIcon} />
                <FeaturesItem iconSelected={livehelpIcon} />
            </Features>
        )
    }
}

export default FeaturesContainer;