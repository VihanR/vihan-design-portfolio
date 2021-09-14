import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "./common/Breadcrumb";
import {FiChevronUp} from "react-icons/fi";
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";



class PortfolioMain extends Component{
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Portfolio' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Portfolio'}   />
                {/* End Breadcrump Area */}

                {/* Start Service Area */}
                <div className="service-area ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <span className="subtitle">All Projects</span>
                                    <h2>All Works</h2>
                                    <p>Below is a collection of my design projects.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row mt--10">
                            {/* Start Single Portfolio */}
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="/project-dreamtime">
                                            <img src="/assets/images/portfolio/related-image-dreamtime.jpg" alt="Project Dreamtime"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/project-dreamtime">Project Dreamtime</a></h4>
                                        <span className="category">MOBILE</span>
                                    </div>
                                </div>
                            </div>
                             {/* End Single Portfolio */}
                            {/* Start Single Portfolio */}
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="/project-cyberink">
                                            <img src="/assets/images/portfolio/related-image-cyberink.jpg" alt="Project CyberInk"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/project-cyberink">Project Cyberink</a></h4>
                                        <span className="category">MOBILE</span>
                                    </div>
                                </div>
                            </div>
                             {/* End Single Portfolio */}
                        </div>
                    </div>
                </div>
                {/* End Service Area */}


      
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />


            </React.Fragment>
        )
    }
}
export default PortfolioMain;