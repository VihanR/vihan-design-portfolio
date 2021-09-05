import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { FiCheck } from "react-icons/fi";
import TabThree from "./tab/TabThree";
import { slickDot } from "../page-demo/script";
import Slider from "react-slick";
import { slideSlick } from "c:/Design Portfolio Template/imroz/src/page-demo/script";



import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';



const SocialShare = [
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/in/vihan-ramanayake/'},

]

const TabOne = [
    {
        image: '1',
        bigImage: '/assets/images/portfolio/big/artist.jpg',
        category: 'User Persona: Artist',
    },
    {
        image: '2',
        bigImage: '/assets/images/portfolio/big/general.jpg',
        category: 'User Persona: Art Enthusiast',
    },
]


function App() {

}

class ProjCyber extends Component{
  
    constructor (props) {
        super(props)
        this.state = {
            tab1:0,
            tab2:0,
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        const { tab1, isOpen } = this.state;
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Cyber Ink' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" data-black-overlay="7"/>
                
                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--300 pb--120 pb_md--100 pb_sm--100  bg_image bg_image--4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Overview */}
                <div 
                    style = {{
                        paddingBottom: '80px'
                    }}
                    className="rn-portfolio-details ptb--120 bg_color--1">
                    <div style = {{paddingTop:'50px'}}className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-details">
                                    <div className="row row--35 mb--50">
                                        <div className="col-lg-6">
                                            <div className="inner">
                                                <div className="section-title">
                                                    <h2 className="title">Project Overview</h2>
                                                    <p className="description mt--30">CyberInk is an intuitive application, built using Android Studio, which aims to equips university students from all disciplines with the fundamental knowledge of common cyber security threats and methods to increase their digital and cyber resilience.  </p>
                                                </div>
                                                <div className="portfolio-view-list d-flex flex-wrap">
                                                    <div className="port-view">
                                                        <span>Role</span>
                                                        <h5>UI/UX Designer</h5>
                                                    </div>

                                                    <div className="port-view">
                                                        <span>Project Type</span>
                                                        <h5>Mobile App</h5>
                                                    </div>

                                                    <div className="port-view">
                                                        <span>Date</span>
                                                        <h5>March-21 - May-21</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="portfolio-details-accordion mt_md--40 mt_sm--40">
                                                <div className="inner">
                                                    <div className="section-title">
                                                        <h4 className="title">Team & Role</h4> 
                                                        <p className="description mt--30">I was the UI/UX Designer in Project CyberInk, responsible for taking user requirements and developing various wireframes and prototypes on Adobe XD and Android Studio. The team also consisted of a Developer, Business Analyst and Project Manager. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Overview */}
                {/* Start design Process */}
                <div style = {{paddingTop: '80px'}}className="portfolio-work bg_color--1"> 
                    <div style = {{paddingBottom:'0px'}}className="portfolio-related-work pb--120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center">
                                        <span className="subtitle"></span>
                                        <h2 className="title">The Design Process</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                 <div className="col-lg-12">
                                    <div className="section-title text-left">
                                    <h4 
                                        style = {{
                                            paddingTop: '30px'
                                        }}
                                        className="design-process-sub-heading">Research: User Surveys</h4>
                                        <p 
                                            style = {{
                                                paddingTop: '20px'
                                            }}
                                        className="description1">Surveys were effective in allowing the team to assess the general cyber security knowledge of the everyday university student, which aided the team in developing the project scope. A total of 30 university students were surveyed, from a variety of years and degrees. </p>
                                        <p className="description2">The key findings were as follows:
                                            <ul 
                                                style = {{
                                                    paddingTop: '20px'
                                                }}
                                            className="list-style--1">
                                                <li><FiCheck /> Over 70% of students had fallen victim to a scam in the past </li>
                                                <li><FiCheck /> 90% of students did not employ password best practices</li>
                                                <li><FiCheck /> 80% of students were interested in learning more about common cyber security threats </li>
                                            </ul>     
                                        </p>
                                    </div>                          
                                </div>
                            </div>
                        </div>    
                        <div style ={{paddingtTop: '40px'}} className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-left">
                                        <h4
                                            style = {{
                                                paddingTop: '100px',
                                            }}
                                        > Product Concept</h4> 
                                        <p style = {{paddingBottom:'40px'}}>After gathering relevant requirements from stakeholders using interviews and surveys, five high-level functionalities were identified, which allowed the application to address the user’s primary need of learning cyber security awareness in a fun, simple and engaging way:</p>
                                    </div>
                                    <div>
                                        <ol> <strong>Mini games:</strong> allows a user to play cyber security games to increase their awareness of cyber security threats and best practices to protect their digital assets.</ol>
                                        <ol> <strong>Quizzes: </strong>quizzes allow students to test the theory they learn from learning modules in a simple and engaging way, which minimises their cognitive load.</ol>
                                        <ol> <strong>Notes: </strong>users can take digital notes when progressing through content, which will allow them to engage with the theory in a meaningful way, enhancing the learning process.</ol>
                                        <ol> <strong>Cyber Security News Feed:</strong> this feature allows the users to stay up to date with the world of technology and presents them with real life examples of topics they have learnt in the application. This further the user’s educational experience, giving them an incentive to continue to learn and care about cyber security.</ol>
                                        <ol> <strong>Experience Points & Trophies:</strong> users have a defence level in the application, which they can increase by earning experience points from completing modules. Completing modules and mini games also enables the user to unlock trophies</ol>
                                    </div>    
                                    <div>
                                        <p>These high-level functionalities, along with the other basic features of the application were converted into technical system requirements, which are depicted in the use-case diagram below. </p>
                                    </div>
                                </div>    
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-left">
                                        <h4 style = {{paddingTop: '100px'}} className="design-process-sub-heading"> Wireframing & Prototyping </h4>
                                    </div>
                                    <div>
                                        <h5>Sketching</h5>
                                    </div>
                                    <div className= "user-flows-desc">
                                        <p style = {{ paddingTop: '20px'}} > To approach the design of the application, I started by sketching out our concept on paper. The aim of this prototype was to determine the main pages, basic layout of those pages.</p>        
                                    </div>
                                    <div>
                                        <h5>Wireframing</h5>
                                    </div>
                                    <div className= "user-flows-desc">
                                        <p style = {{ paddingTop: '20px'}} > A low fidelity prototype was developed utilising Adobe XD. The aim of this prototype was to determine the colours and theme of the application. A low- fidelity prototype allowed the team to easily communicate our ideas to potential end users without the extensive use of resources. The preliminary design concept of CyberInk is showcased above.</p>
                                        <p> Feedback: feedback in relation to CyberInk’s concept and design was gathered from its target users, university students. The general sentiment of users was positive, with many expressing that the simple card layout was intuitive and predictable. There were common suggestions by the majority of surveyees to enhance the user experience with a navigation bar that allowed the user to seamlessly move between the pages depicted in the home screen. Many students also expressed that the purple background of the application was too ‘flashy’. The team’s intention to create a techy theme unknowingly made it difficult for users to concentrate on the content of the application, which was an important consideration in future iterations.   </p>        
                                    </div>
                                    <div className="related-work mt--30 text-center">
                                        <img 
                                            style = {{
                                                width: null,
                                                resizeMode: 'contain',
                                                height: 450                                 
                                            }}
                                            src={lowFidWireframe1} alt="icon" />                                                    
                                    </div>
                                </div>
                            </div>                       
                        </div> 
                        <div style = {{paddingBottom:'100px'}} className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title">
                                        <span className="subtitle"></span>
                                        <h4 style = {{paddingTop: '40px'}} className="title">Final Design </h4>
                                    </div>
                                    <div className= "style-guide-desc"></div>
                                    <p style = {{paddingTop: '20px', paddingBottom:'20px'}}>Upon gathering initial user feedback and validating the applications’ design, I developed a final high-fidelity prototype in Adobe XD, which allowed the team to acquire a better understanding of the user journey and logic of the application. </p>
                                    <p>By integrating suggested improvements, in addition to design best practices documented in Nielson’s Ten Usability Heuristics, I produced a user interphase that was intuitive and a user-friendly experience. </p>
                                    <p>Below are the final high-fidelity wireframes that were created in Figma, visually outlining each step of the user’s journey. </p>
                                    <div style = {{paddingTop:'40px'}}className="app-wireframe-carousel">
                                        <AliceCarousel>
                                            <img src = "/assets/images/portfolio/high-fid-1.svg"/>                                     
                                            <img src = "/assets/images/portfolio/high-fid-2.svg"/>                                     
                                            <img src = "/assets/images/portfolio/high-fid-3.svg"/>                                     
                                            <img src = "/assets/images/portfolio/high-fid-4.svg"/>                                     
                                            <img src = "/assets/images/portfolio/high-fid-5.svg"/>  
                                            <img src = "/assets/images/portfolio/high-fid-6.svg"/>                                                                        
                                        </AliceCarousel>
                                    </div>

                                </div>
                            </div>  
                        </div>
                        <div style = {{paddingTop:'80px',paddingBottom:'20px'}} className="portfolio-work bg_color--5">
                            <div className="portfolio-related-work pb--120">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="section-title text-center">
                                                <span className="subtitle"></span>
                                                <h2 
                                                    style = {{
                                                        paddingTop: '40px'
                                                    }}
                                                className="title">Reflection & Learnings</h2>
                                            </div>
                                            <p>From this project, I learnt the importance of subtle design choices such as colour, and how those design choices can make or break the user’s experience with the application. I also learnt the importance of involving potential users throughout the entire design process to ensure that user needs are at the forefront of the applications’ design. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
                {/* End  design process */}


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
export default ProjCyber;
