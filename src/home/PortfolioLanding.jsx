import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp} from "react-icons/fi";
import { Link } from 'react-router-dom';
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";
import TabTwo from "../elements/tab/TabTwo";
import ContactOne from "../elements/contact/ContactOne";
import ServiceList from "../elements/service/ServiceList";
import Helmet from "../component/common/Helmet";

const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Entrepreneur & Designer',
        title: 'Hello, I’m <span>Vihan</span> Welcome to my World.',
        description: '',
        buttonText: 'Download My CV',
        buttonLink: '/assets/images/about/resume.pdf'
    }
]

const PortfolioLanding = () => {
    let title = 'About Me',
        description = 'During my time in the workforce and at university, I’ve been exposed to all facets of product development, from building databases to designing the interface of web and mobile applications.  I’m seeking to apply my design and leadership skills to build impactful products, whether that be as a Product Manager, Product Designer or UI/UX Designer.';
    return (
        <div>
            <Helmet pageTitle="Portfolio Landing" />
            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black"/>
            {/* Start Slider Area   */}
            <div id="home" className="fix">
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--34" key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span className="theme-color font-700">{value.category}</span> : ''}
                                            {value.title ? <h1 className="title theme-gradient" dangerouslySetInnerHTML={{__html: value.title}}></h1> : ''}
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn mt--20"><a className="btn-default" href={`${value.buttonLink}`}target="_blank">{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
            </div>
            {/* End Slider Area   */} 

            {/* Start About Area */}
            <div id="about" className="fix">
                <div className="about-area ptb--120">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/about-mountain.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <span className="subtitle">My About Details</span>
                                            <h2 className="title">{title}</h2>
                                            <p className="description mt_dec--20">{description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <TabTwo tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* End About Area */}

            {/* Start Service Area  */}
            <div id="service" className="fix">
                <div className="service-area creative-service-wrapper pb--120 bg_color--5" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30 mb_sm--0">
                                    <span 
                                         style = {{
                                            paddingTop: '100px'
                                        }}        
                                    className="subtitle">What I'm Skilled At</span>
                                    <h2 className="title">My Bread and Butter</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            <div className="col-lg-12">
                                <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            {/* End Service Area  */} 

            {/* Start Portfolio Area */}
            <div className="portfolio-related-work pb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span 
                                         style = {{
                                            paddingTop: '100px'
                                        }}        
                                    className="subtitle">Related Work</span>
                                    <h2 className="title">My Projects</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--10">
                            {/* Start Single Portfolio */}
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="/portfolio-details">
                                            <img src="/assets/images/portfolio/related-image-dreamtime.jpg" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/portfolio-details">Project Dreamtime</a></h4>
                                        <span className="category">MOBILE</span>
                                    </div>
                                </div>
                            </div>
                             {/* End Single Portfolio */}
                            {/* Start Single Portfolio */}
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <Link to="/portfolio">
                                            <img src="/assets/images/portfolio/related-image-cyberink.jpg" alt="Portfolio-images"/>
                                        </Link>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/portfolio">Project Cyberink</a></h4>
                                        <span className="category">MOBILE</span>
                                    </div>
                                </div>
                            </div>
                             {/* End Single Portfolio */}
                        </div>
                        <div className="view-more-btn mt--60 mt_sm--30 text-center">
                                <a className="btn-default" href="/portfolio-main"><span>View All Projects</span></a>
                        </div>
                    </div>
                </div>
            {/* End Portfolio Area */}            


            {/* Start COntact Area */}
            <div id="contact" className="fix">
                <div className="rn-contact-area pb--120 bg_color--5">
                    <ContactOne />
                </div>
            </div>
            {/* End COntact Area */}

            <Footer/>
            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
        </div>
    )
}

export default PortfolioLanding;
