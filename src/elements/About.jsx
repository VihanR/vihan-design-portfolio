import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import CounterOne from "../elements/counters/CounterOne";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import AboutComp from "../component/HomeLayout/homeOne/About";
import Slider from "react-slick";
import { slideSlick } from "c:/Design Portfolio Template/imroz/src/page-demo/script";
import PortfolioList from "./portfolio/PortfolioList";


const SlideList = [
    {
        textPosition: 'text-left',
        bgImage: 'bg_image--31',
        category: '',
        title: '',
        description: '',
    },
    {
        textPosition: 'text-left',
        bgImage: 'bg_image--30',
        category: '',
        title: '',
        description: '',

    } 
]

class About extends Component{
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='About' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                {/* Start Breadcrump Area */}
                <Breadcrumb title={'About'}   />
                {/* End Breadcrump Area */}

                {/* Start About Area */}
                <div className="about-area ptb--120 bg_color--1">
                    <AboutComp />
                </div>
                {/* End About Area */}

                {/* Start Society Area */}
                <div 
                    style = {{
                        marginTop: '30px',
                    }}
                    className="about-text-area bg_color--5">
                    <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-left">
                                        <h2 className="title"
                                        style = {{
                                            paddingTop: '100px'
                                        }}
                                        >Entrepreneur & Co-Founder</h2>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="slider-wrapper" 
                            style = {{
                                paddingTop: '50px',
                                paddingBottom: '100px'
                            }}
                        >
                        <div className="slider-activation">
                            <Slider className="rn-slick-dot dot-light" {...slideSlick}>
                                {SlideList.map((value , index) => (
                                    <div className={`slide slide-style-2 slider-box-content without-overlay d-flex align-items-center justify-content-center bg_image ${value.bgImage}`} key={index} data-black-overlay="2">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className={`inner ${value.textPosition}`}>
                                                        {value.category ? <span>{value.category}</span> : ''}
                                                        {value.title ? <h1 className="title ">{value.title}</h1> : ''}
                                                        {value.description ? <p className="description">{value.description}</p> : ''}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-left">
                                        <p className="description1">At the beginning of 2021, I was entering my final year of university and I felt lost and confused. 
                                        As a university students, I had no idea if the stuff I was learning in the classroom was actually going to help me in the real world. 
                                        Many of the assignments we were given were always focused on theory. I didn’t know where to start to apply my knowledge in a practical way. </p>
                                        <p className="description2">I decided to take matters into my own hands and <strong>with the help of some friends and UNSW Acedemics, 
                                        I Co-Founded UNSW Sandbox Society.</strong> The society aims to provide bite-sized Sandbox Contests for all students to undertake. 
                                        The Sandbox Contests aim to foster a career-focused experience for students from a variety of degree backgrounds to experiment, 
                                        innovate and develop transferable skills that will prepare them for the professional workforce. Our vision is to bridge the skill 
                                        gap between university and the professional world by making sandbox challenges accessible to students from all disciplines. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* Start Columns Area  */}
                    <div 
                        style = {{
                             paddingBottom: '0px'
                        }}                    
                    className="rn-columns-area ptb--120 bg_color--5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="single-column">
                                        <h4 
                                            style = {{
                                                paddingBottom: '20px'
                                            }}
                                        className="tilte">Building a Team</h4>
                                        <p>As a final year student who had their degree extended, many of my friends had already graduated so I had to build a team from scratch,  
                                            gain their trust in me as a leader, communicate my vision, and inspire the team to work towards this vision. We now have 27 team members 
                                            in total.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 mt_sm--30">
                                    <div className="single-column">
                                        <h4 
                                            style = {{
                                                paddingBottom: '20px'
                                            }}                                        
                                        className="tilte">Designing a Program</h4>
                                        <p>As the Co-Founder, I worked closely with Students, Acedmics and Industy to design our flagship ‘Sandbox Contest’, a 6-8 week problem-solving 
                                            program and competition, bringing together multi-disciplinary teams to build a solution to an industry challenge. We had over 40 students 
                                            participating in our first intake.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 mt_sm--30 mt_md--30">
                                    <div className="single-column">
                                        <h4 
                                             style = {{
                                                paddingBottom: '20px'
                                            }}                                       
                                        className="tilte">Growing an Organisation</h4>
                                        <p>I’ve been part of a wild journey, growing our team from 0 to 27 people in less than 3 months, growing our membership base from 0 to 450 
                                            in less than a month, and growing our social media presence from 0 to over 700 Facebook page likes in 3 months by analysing the market 
                                            and developing and implementing strategies.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Society Area */}

                {/* Start CounterUp Area */}
                <div className="rn-counterup-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="subtitle">UNSW Sandbox Society</span>
                                    <h2 className="title">Our Story & Impact</h2>
                                    <p className="description">We have experienced tremendous growth since launching in Feburary 2021 (as at August 2021)</p>
                                </div>
                            </div>
                        </div>
                        <CounterOne />
                    </div>
                    <div className="view-more-btn mt--60 mt_sm--30 text-center">
                            <a className="btn-default" href="https://unswsandboxsociety.com/" target="blank"><span>View Our Website</span></a>
                    </div>
                </div>
                {/* End CounterUp Area */}

                {/* Start Portfolio Area */}
                <div 
                    style = {{
                        paddingTop: '100px'
                    }}
                className="portfolio-area pb--60 bg_color--1">
                    <div className="portfolio-sacousel-inner mb--55 mb_sm--0">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center mb--30 mb_sm--0">
                                        <span className="subtitle">My Passions</span>
                                        <h2 className="title">Hobbies & Interests</h2>
                                        <p className="description">I'm a huge sports fan and I love letting my mind wonder through art and books.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <PortfolioList styevariation="text-center mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="6" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Area */}


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
export default About