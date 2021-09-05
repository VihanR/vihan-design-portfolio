import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import {FaLightbulb} from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp, FiXCircle } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { FiCheck } from "react-icons/fi";


import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


function App() {

}

class Portfolio extends Component{
  
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Cyber Ink' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" data-black-overlay="7"/>
                
                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--300 pb--120 pb_md--100 pb_sm--100  bg_image bg_image--5">
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
                                                    <p className="description mt--30">CyberInk is a university project for an Information Systems course called ‘Mobile Applications Development’. The application aims to equips university students from all disciplines with the fundamental knowledge of common cyber security threats and methods to increase their digital and cyber resilience.   </p>
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
                {/* Start Problem */}
                <div style = {{paddingBottom:'20px', paddingTop:'80px'}}className="portfolio-work bg_color--5">
                    <div className="portfolio-related-work pb--120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center">
                                        <span className="subtitle"></span>
                                        <h2 className="title">The Problem</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-left">
                                        <p 
                                            style = {{
                                                paddingTop: '30px'
                                            }}
                                        className="description1">The increased reliance on digital interconnectedness as a result of the COVID-19 pandemic has created an environment for cyber criminals to thrive in, due to the increased exchange of data between people, driving the rate of cybercrime up from 160 incidents in June 2019 to 318 incidents reported in April 2020 (ACSC Annual Cyber Threat Report, 2020). </p>
                                        <p style = {{paddingTop:'20px'}}className="description2">Universities are a prime target for cyber criminals, as they hold valuable data including emails, personal information, technical resources, sensitive research data and intellectual property. Exploiting students is one of the easiest ways into a university network for hackers, which creates a need to raise cyber awareness amongst this demographic. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Problem */}
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
                                    <div style = {{paddingTop:'40px'}}>
                                        <p>Our team followed a Design Thinking approach, aiming to incorporate the stages ‘Empathise’, ‘Define’, ‘Ideate’, ‘Prototype’ and ‘Test’ in our project. We spent most of the project in the ‘Empathise’ stage as we really wanted to understand the challenges students faced when it came to protecting their digital assets. </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 col-12">
                                    <div className="related-work mt--30 text-center">
                                        <img 
                                                style = {{
                                                    paddingTop:'40px',
                                                    width: null,
                                                    resizeMode: 'contain',
                                                    height: 500                                 
                                                }}
                                            src="assets/images/portfolio/cyberink/process-diagram.svg" alt = "Design Process"/>                                                    
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
                                            paddingTop: '40px'
                                        }}
                                        className="design-process-sub-heading">Research: User Surveys</h4>
                                        <p 
                                            style = {{
                                                paddingTop: '20px',
                                                paddingBottom:'20px'
                                            }}
                                        className="description1">Surveys were a non-invasive way for the team to assess the general cyber security knowledge and behaviour of the everyday university student, which helped the team define the key issues in our problem domain.  </p>
                                        <p className = "description2">I collaborated closely with the Business Analysts to design user surveys. A total of 30 university students were surveyed, from a variety of years and degrees. </p>
                                        <p className="description3">The key findings were as follows:</p>
                                        <ul 
                                            style = {{
                                                paddingTop: '20px'
                                            }}
                                            className="list-style--1">
                                            <li><FiCheck /> 70% of students had fallen victim to a scam in the past </li>
                                            <li><FiCheck /> 65% of students change their password infrequently (once every 6 months)</li>
                                            <li><FiCheck /> 70% of students used the same password for multiple accounts </li>
                                            <li><FiCheck /> 80% of students could not identify more than 2 cyber threats </li>
                                            <li><FiCheck /> 80% of students were interested in learning more about common cyber security threats </li>
                                        </ul>    
                                    </div>                          
                                </div>
                            </div>
                            <div className="row mt--10">
                                <div className="col-12">
                                    <div className="related-work mt--30">
                                        <img 
                                            style = {{
                                                width: null,
                                                resizeMode: 'contain',
                                                height: 480                                 
                                            }}
                                        src="assets/images/portfolio/cyberink/surveys.svg" alt = "User Surveys" />                                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style = {{paddingTop:'20px'}}className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-left">
                                    <h4 
                                        style = {{
                                            paddingTop: '40px'
                                        }}
                                        className="design-process-sub-heading">Empathise: Empathy Map</h4>
                                        <p 
                                            style = {{
                                                paddingTop: '20px',
                                                paddingBottom:'20px'
                                            }}
                                        className="description1">Based on the information derived from the surveys we conducted and our initial research, I aimed to summarise our target user’s key behaviours and frustrations by creating an empathy map.   </p>
                                        <p className = "description2">This allowed the team to understand the user’s pain points so we could define the core problem our solution was aiming to address. </p>
                                        <p className="description3">After reviewing the empathy map together as a team, we defined the key user pain points as: </p>
                                        <ul 
                                            style = {{
                                                paddingTop: '20px'
                                            }}
                                            className="list-style--1">
                                            <li><FiXCircle /> A high technical barrier to understanding cyber security</li>
                                            <li><FiXCircle /> An overwhelming amount of information to protect online</li>
                                            <li><FiXCircle /> A lack of transparency regarding what information to trust online </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 col-12">
                                    <div className="related-work mt--30 text-center">
                                        <img 
                                                style = {{
                                                    paddingTop:'40px',
                                                    width: null,
                                                    resizeMode: 'contain',
                                                    height: 700                                 
                                                }}
                                            src="assets/images/portfolio/cyberink/empathy-map.svg" alt = "Empathy Map" />                                                    
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
                                                paddingTop: '50px',
                                                paddingBottom:'20px'
                                            }}
                                        > Define</h4> 
                                        <p> After gathering findings from research, I worked closely with the team to define the problem statement.</p>
                                        <h5>Problem Statement:</h5>
                                        <p> University students are overwhelmed with the amount of information they need to protect online, which coupled with the technical nature of cyber security, has caused them to neglect the importance of remaining vigilant in the digital world.</p>
                                        <p>I framed this problem as an opportunity by developing a ‘How Might We’ (HMW) statement to enable the team to begin ideating.</p>
                                        <h5>How Might We Statement: </h5>
                                        <p> How might we empower university students to protect their most important digital assets and increase their cyber resilience in a fun and engaging way?</p>
                                    </div>
                                </div>    
                            </div>
                        </div>   
                        <div style ={{paddingtTop: '20px'}} className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-left">
                                        <h4
                                            style = {{
                                                paddingTop: '80px',
                                                paddingBottom:'20px'
                                            }}
                                        > Ideation: Defining the MVP</h4> 
                                        <p>After brainstorming and ideating solutions based on the statements developed earlier, our team landed on a gamified cyber security experience, which allowed the application to address the user’s primary need of learning cyber security awareness in a fun, simple and engaging way.</p>
                                        <p>As the Designer, I took the teams’ idea and developed a preliminary product concept with five core functionalities:</p>
                                    </div>
                                        <ul style = {{paddingTop:'20px'}}className ="list-style--1">
                                            <li><FiCheck/><strong> Mini games:</strong> allows a user to play cyber security games to increase their awareness of cyber security threats and best practices to protect their digital assets.</li>
                                            <li><FiCheck/><strong> Quizzes: </strong>quizzes allow students to test the theory they learn from learning modules in a simple and engaging way, which minimises their cognitive load.</li>
                                            <li><FiCheck/><strong> Notes: </strong>users can take digital notes when progressing through content, which will allow them to engage with the theory in a meaningful way, enhancing the learning process.</li>
                                            <li><FiCheck/><strong> Cyber Security News Feed:</strong> this feature allows the users to stay up to date with the world of technology and presents them with real life examples of topics they have learnt in the application. This further the user’s educational experience, giving them an incentive to continue to learn and care about cyber security.</li>
                                            <li><FiCheck/><strong> Experience Points & Trophies:</strong> users have a defence level in the application, which they can increase by earning experience points from completing modules. Completing modules and mini games also enables the user to unlock trophies</li>
                                        </ul>
                                    <div>
                                        <p style = {{paddingTop:'40px'}}>I worked with the Developer to create a use-case diagram that mapped out the technical system requirements of our MVP. </p>
                                    </div>
                                </div> 
                                <div className="col-lg-12 col-md-6 col-12">
                                    <div style = {{paddingLeft:'10px'}}className="related-work mt--30">
                                        <img 
                                                style = {{
                                                    paddingTop:'40px',
                                                    width: null,
                                                    resizeMode: 'contain',
                                                    height: 700                                 
                                                }}
                                            src="assets/images/portfolio/cyberink/use-case.svg" alt = "Use Case Diagram"/>                                                    
                                    </div>
                                </div>   
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-left">
                                        <h4 style = {{paddingTop: '100px'}} className="design-process-sub-heading"> Prototyping & Testing</h4>
                                    </div>
                                    <div>
                                        <h5 style = {{paddingTop:'20px'}}>Sketching</h5>
                                    </div>
                                    <div className= "user-flows-desc">
                                        <p style = {{ paddingTop: '20px'}} > To approach the design of the application, I started by sketching out our concept on paper. The aim of this prototype was to determine the main pages, basic layout of those pages.</p>        
                                    </div>
                                    <div className="col-lg-8 col-md-6 col-12">
                                        <div className="related-work mt--30">
                                        <img 
                                            style = {{
                                                width: null,
                                                resizeMode: 'contain',
                                                height: 350,
                                                paddingTop:'40px'                                 
                                            }}
                                            src="assets/images/portfolio/cyberink/sketch-1.png" alt = "Prototype: Sketch" />  
                                        </div>                                                  
                                    </div>
                                    <div className="col-lg-8 col-md-6 col-12">
                                        <div className="related-work mt--30">
                                        <img 
                                            style = {{
                                                width: null,
                                                resizeMode: 'contain',
                                                height: 350,
                                                paddingTop:'40px'                                                                
                                            }}
                                            src="assets/images/portfolio/cyberink/sketch-2.png" alt = "Prototype: Sketch"/>               
                                        </div>                                     
                                    </div>
                                    <div>
                                        <h5 style = {{paddingTop:'40px'}}>Wireframing</h5>
                                    </div>
                                    <div className= "user-flows-desc">
                                        <p style = {{ paddingTop: '20px'}} > A low fidelity prototype was developed utilising Adobe XD. The aim of this prototype was to determine the colours and theme of the application. A low- fidelity prototype allowed the team to easily communicate our ideas to potential end users without the extensive use of resources. The preliminary design concept of CyberInk is showcased above.</p>
                                        <p> <strong>Feedback:</strong> feedback in relation to CyberInk’s concept and design was gathered from its target users, university students. The general sentiment of users was positive, with many expressing that the simple card layout was intuitive and predictable. There were common suggestions by the majority of surveyees to enhance the user experience with a navigation bar that allowed the user to seamlessly move between the pages depicted in the home screen. Many students also expressed that the purple background of the application was too ‘flashy’. The team’s intention to create a techy theme unknowingly made it difficult for users to concentrate on the content of the application, which was an important consideration in future iterations.   </p>        
                                    </div>
                                    <div className="col-12">
                                        <img 
                                            style = {{
                                                width: null,
                                                resizeMode: 'contain',
                                                paddingTop:'40px',
                                                height: 450
                                            }}
                                            src="assets/images/portfolio/cyberink/low-fid.svg" alt = "Prototype: Low-Fidelity"/>                                                    
                                    </div>
                                </div>
                            </div>                       
                        </div> 
                        <div style = {{paddingBottom:'50px'}} className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title">
                                        <span className="subtitle"></span>
                                        <h4 style = {{paddingTop: '40px'}} className="title">Final Design </h4>
                                    </div>
                                    <div className= "style-guide-desc"></div>
                                    <p style = {{paddingTop: '20px'}}>Upon gathering initial user feedback and validating the applications’ design, I developed a final high-fidelity prototype in Adobe XD, which allowed the team to acquire a better understanding of the user journey and logic of the application. </p>
                                    <p>By integrating suggested improvements, in addition to design best practices documented in Nielson’s Ten Usability Heuristics, I produced a user interphase that was intuitive and a user-friendly experience. </p>
                                    <p>Below are the final high-fidelity wireframes that were created in Figma, visually outlining each step of the user’s journey. </p>
                                    <div style = {{paddingTop:'40px'}}className="app-wireframe-carousel">
                                        <AliceCarousel>
                                            <img src = "/assets/images/portfolio/cyberink/high-fid-1.svg" alt = "Prototype: High-Fidelity"/>                                     
                                            <img src = "/assets/images/portfolio/cyberink/high-fid-2.svg" alt = "Prototype: High-Fidelity"/>                                     
                                            <img src = "/assets/images/portfolio/cyberink/high-fid-3.svg" alt = "Prototype: High-Fidelity"/>                                     
                                            <img src = "/assets/images/portfolio/cyberink/high-fid-4.svg" alt = "Prototype: High-Fidelity"/>                                     
                                            <img src = "/assets/images/portfolio/cyberink/high-fid-5.svg" alt = "Prototype: High-Fidelity"/>  
                                            <img src = "/assets/images/portfolio/cyberink/high-fid-6.svg" alt = "Prototype: High-Fidelity"/>                                                                        
                                        </AliceCarousel>
                                    </div>

                                </div>
                            </div>  
                        </div>
                        <div style = {{paddingTop:'50px',paddingBottom:'20px'}} className="portfolio-work bg_color--5">
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
                                            <p style = {{paddingTop:'40px'}}>Working in this project was quite rewarding, as I was able to design for a target market I identified closely with as a university student. At the same time, it was quite challenging, as I had to put aside my assumptions of our target market and start fresh. This led to several important learnings that I took away from the project. </p>
                                            <p>Some of the key takeaways from this project were: </p>
                                        </div>
                                        <div className="col-lg-12">
                                            <ul style = {{paddingTop:'20px'}}className ="list-style--1">
                                                <li><FaLightbulb/><strong> Low-fidelity prototypes are just as important as high-fidelity prototypes. </strong> This project truly allowed me to understand the value of designing low-fidelity prototypes. I was able to quickly and effectively determine if I was on the right track with the design by showing my low-fidelity prototype to a handful of users. </li>
                                                <li><FaLightbulb/><strong> Design with purpose in mind. </strong>Design with purpose in mind. It’s important to design from a holistic perspective, taking into consideration the intended purpose of the product. In this project, I had to keep the design as minimal and structured as possible to ensure that the content was easy to consume, as the main purpose of the application was to educate users.</li>
                                            </ul>
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
export default Portfolio;
