import React, { Component , Fragment } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { FiUsers, FiAward, FiUserPlus, FiFacebook } from "react-icons/fi";


class CounterOne extends Component{
    state = {
        didViewCountUp: false
    };
    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({didViewCountUp: true});
        }
    }
    render(){
        let Data = [
            {
                icon: <FiUsers />,
                countNum : 27,
                countTitle: 'Team Members',
            },

            {
                icon: <FiUserPlus />,
                countNum : 450,
                countTitle: 'Student Members',
            },

            {
                icon: <FiFacebook />,
                countNum : 700,
                countTitle: 'Facebook Page Likes',
            },

            {
                icon: <FiAward />,
                countNum : 2000,
                countTitle: 'Funding Received',
            }
        ];

        return(
            <Fragment>
                <div className="row mt--30">
                    {Data.map( (value, index) => (
                        <div className="im_single_counterup col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                            <div className="im_counterup">
                                <div className="inner">
                                    <div className="icon">
                                        {value.icon}
                                    </div>
                                    <h2 className="counter">
                                        <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall>
                                            <CountUp end={this.state.didViewCountUp ? value.countNum : 0} />
                                        </VisibilitySensor>
                                    </h2>
                                    <p className="description">{value.countTitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Fragment>
        )
    }
}
export default CounterOne;