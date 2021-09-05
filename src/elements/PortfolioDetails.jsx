import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { FiCheck } from "react-icons/fi";


import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


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


class PortfolioDetails extends Component{
  
    constructor (props) {
        super(props)
        this.state = {
            tab1:0,
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
                <PageHelmet pageTitle='Portfolio Details' />

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
                                                    <p className="description mt--30">Project Dreamtime was an 8-week university project consisting of four 2-week Agile sprints in partnership with the Australian Red Cross that aimed to raise awareness of First Nations Peoples diversified arts, culture, and values. </p>
                                                    <p className="description">Our team developed an end-to-end mobile application that allows Indigenous Artists to showcase their artwork and connect with the Australian community to bring awareness to the heritage and cultural significance of Indigenous artworks.</p>
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
                                                        <h5>June-21 - Aug-21</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="portfolio-details-accordion mt_md--40 mt_sm--40">
                                                <div className="inner">
                                                    <div className="section-title">
                                                        <h4 className="title">Team & Role</h4> 
                                                        <p className="description mt--30">I was the UI/UX Designer, and I was part of a diverse Agile team consisting of a Scrum Master, Product Owner, 2 Business Analysts and 2 Developers.</p>
                                                        <p className="description mt--30">I was responsible for:</p>
                                                        <ul className="list-style--1">
                                                            <li><FiCheck /> Defining user pain points</li>
                                                            <li><FiCheck /> Converting user requirements into a product through the development of  wireframes and prototypes in Figma and Android Studio</li>
                                                            <li><FiCheck /> Interacting with end users to conduct usability tests and refine the product. </li>
                                                        </ul>     
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
                                        className="description1">Arts is integral to First Nations Peoples culture, as it is used to pass down knowledge of the land, events, and beliefs. Dreamtime stories of creations are depicted through artworks and passed down from generation to generation through these artworks and this tradition is imperative to keep Indigenous culture alive. </p>
                                        <p style = {{paddingTop:'20px'}}className="description2">Indigenous artworks are severely underrepresented in the art community, with only 20.5% of Australian galleries showcasing Indigenous artworks (Parliament of Australia, 2020). Indigenous artworks are also heavily misappropriated, with over 80% of Indigenous artworks sold in Australia being inauthentic (Arts Law Centre of Australia, 2021). </p>
                                        <p style = {{paddingTop:'20px'}} className="description2">In part, this situation exists because tourists and non-Indigenous Australians alike, are not aware that they are inauthentic, nor aware of the cultural significance of First Nations arts and crafts. Ultimately, the lack of awareness and appreciation of Indigenous arts contributes to the marginalisation and loss of identity of First Nations People.</p>
                                        <p 
                                            style = {{
                                                color:"black",
                                                paddingTop: '40px',
                                                fontWeight: 'bold',
                                                fontStyle: 'italic',
                                                fontSize: 20,
                                                textAlign: 'center'
                                            }}
                                        className="description2">How can we increase the awareness and appreciation of Indigenous art to decrease marginalisation and loss of identity within Indigenous communities?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Problem */}
                {/* Start Users */}
                <div style = {{paddingTop: '80px', paddingBottom: '20px'}}className="portfolio-work bg_color--1">
                    <div className="portfolio-related-work pb--120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center">
                                        <span className="subtitle"></span>
                                        <h2 className="title">Users & Audience</h2>
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
                                        className="description1">The first target users of Dreamtime are Indigenous Artists seeking a platform to receive greater recognition for their work and educate the Australian community about Indigenous culture. An important segment of this market is up-and-coming Indigenous Artists who may struggle to receive the support and resources to publish their work in Australian galleries.</p>
                                        <p style ={{paddingTop:'20px'}}className="description2">The second target users of Dreamtime are and tourist and non-Indigenous Australians who are interested in arts.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Users */}
                {/* Start Sol */}
                <div style = {{paddingTop:'80px'}}className="portfolio-work bg_color--5">
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
                                        className="title">The Solution</h2>
                                    </div>
                                </div>
                            </div>
                            <div style = {{paddingTop:'80px'}} className="row">
                                <div className="col-lg-12">
                                    <div className="service-details-inner">
                                        <div className="inner">
                                            {/* Start Single Area */}
                                            <div className="row row--35 sercice-details-content align-items-center">
                                                <div className="col-lg-6 col-12">
                                                    <div className="thumb position-relative text-right">
                                                      <img style = {{marginRight:'40px'}} src = "/assets/images/portfolio/artwork-upload.gif" alt = "Walkthrough"></img>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-12">
                                                    <div className="details mt_md--30 mt_sm--30">
                                                        <div className="section-title">
                                                            <h5 style = {{fontSize:'24px'}}className="title">Upload your creations and share them with the community</h5>
                                                            <p className="description">Indigenous artists can create their own unique profile and upload their artworks for others to view, along with their commentary on the cultural significance and meaning of the artwork.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Area */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style = {{paddingTop:'80px'}}className="row">
                                <div className="col-lg-12">
                                    <div className="service-details-inner">
                                        <div className="inner">
                                            {/* Start Single Area */}
                                            <div className="row row--35 sercice-details-content align-items-center">
                                                <div className="col-lg-6 col-12">
                                                    <div className="details">
                                                        <div className="section-title">
                                                            <h5 style = {{fontSize:'24px'}}className="title">Explore arts & culture from anywhere, anytime</h5>
                                                            <p className="description">Browse an extensive list of Indigenous galleries and Indigenous artworks and support First Nations creators by liking, sharing and commenting on their artworks. </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-12 mt_md--30 mt_sm--30">
                                                    <div className="thumb position-relative">
                                                        <img style = {{marginLeft:'40px'}}src = "/assets/images/portfolio/explore-artwork.gif" alt = "Walkthrough"></img>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Area */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Sol */}
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
                                <div className="col-lg-12 text-center">
                                    <div className="related-work mt--30">
                                        <img 
                                                style = {{
                                                    width: null,
                                                    resizeMode: 'contain',
                                                    height: 800                                 
                                                }}
                                            src="/assets/images/portfolio/design-process.svg" alt = "Design Process"/>                                                    
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
                                        className="description1">To understand the expectations, concerns, and motivations of our target market, I collaborated closely with the Business Analysts in our team to design user surveys for each of our target users (Indigenous Artists and Art Enthusiasts). </p>
                                        <p className="description2">When it came to Indigenous Artists, I wanted to know:</p>
                                        <ul 
                                            style = {{
                                                paddingTop: '20px'
                                            }}
                                            className="list-style--1">
                                            <li><FiCheck /> What their motivations were for creating art (money, understanding, expression etc.)</li>
                                            <li><FiCheck /> How they distributed and promoted their artwork</li>
                                            <li><FiCheck /> If they felt their work was adequately understood and appreciated by the broader community </li>
                                        </ul> 
                                        <p className="description2">On the flipside, when it came to Art & Culture Enthusiasts, I wanted to know:</p>
                                        <ul 
                                            style = {{
                                                paddingTop: '20px'
                                            }}
                                            className="list-style--1">
                                            <li><FiCheck /> How much they know about First Nations Culture</li>
                                            <li><FiCheck /> How familiar they were with non-traditional Indigenous artworks</li>
                                            <li><FiCheck /> If they would interact with Indigenous Arts & Culture if it was more accessible </li>
                                        </ul>   
                                        <p 
                                            style = {{
                                                paddingTop: '40px',
                                                fontWeight: 'bold',
                                                fontStyle: 'italic',
                                                fontSize: 20,
                                                textAlign: 'center'
                                            }}
                                        className="description2">After surveying 42 Art Enthusiasts and 30 Indigenous Artists, I found the following results...</p>
                                        <h5 style = {{paddingTop:'40px'}}>Indigenous Artists</h5>
                                        <div className="row mt--10">
                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="related-work mt--30">
                                                    <img 
                                                        style = {{
                                                            width: null,
                                                            resizeMode: 'contain',
                                                            height: 280                                 
                                                        }}
                                                    src= "/assets/images/portfolio/artist-1.svg" alt="Artist Survey" />                                                    
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-10">
                                                <div className="related-work mt--30">
                                                    <img 
                                                        style = {{
                                                            width: null,
                                                            resizeMode: 'contain',
                                                            height: 280                                 
                                                        }}
                                                    src="/assets/images/portfolio/artist-2.svg" alt="Artist Survey" />                                                    
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="related-work mt--30">
                                                    <img 
                                                            style = {{
                                                                width: null,
                                                                resizeMode: 'contain',
                                                                height: 280                                 
                                                            }}
                                                        src="/assets/images/portfolio/artist-3.svg" alt="Artist Survey" />                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <h5 style = {{paddingTop: '40px'}}> Art Enthusiasts </h5>
                                        <div className="row mt--10">
                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="related-work mt--30">
                                                    <img 
                                                        style = {{
                                                            width: null,
                                                            resizeMode: 'contain',
                                                            height: 280                                 
                                                        }}
                                                    src="/assets/images/portfolio/general-1.svg" alt="Art Enthusiast Survey" />                                                    
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-10">
                                                <div className="related-work mt--30">
                                                    <img 
                                                        style = {{
                                                            width: null,
                                                            resizeMode: 'contain',
                                                            height: 280                                 
                                                        }}
                                                    src="/assets/images/portfolio/general-2.svg" alt="Art Enthusiast Survey" />                                                    
                                                </div>
                                            </div>  
                                            <div className="col-lg-4 col-md-6 col-10">
                                                <div className="related-work mt--30">
                                                    <img 
                                                        style = {{
                                                            width: null,
                                                            resizeMode: 'contain',
                                                            height: 280                                 
                                                        }}
                                                    src="/assets/images/portfolio/general-3.svg"alt="Art Enthusiast Survey" />                                                    
                                                </div>
                                            </div>                                                                  
                                        </div>
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
                                                paddingTop: '100px'
                                            }}
                                            className="design-process-sub-heading">Research: User Personas</h4>
                                    </div>
                                    <div className= "user-persona-desc">
                                        <p
                                            style = {{
                                                        paddingTop: '20px'
                                                    }}
                                            >
                                            After analysing the data from user surveys, I created two user personas to further specify the core needs and motivations of Dreamtime’s target market. I chose to create user personas as they were a great tool for us to empathise with our users, especially when it was difficult to meet them face-to-face given COVID-19 restrictions. </p>        
                                        <p> The user personas were critical to the success of the project, as they  enabled us to effectively prioritise feature requests based on how well they addressed the goals of the primary persona, preventing scope creep.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    {TabOne.map((value , index) => (
                                        <div className="col-lg-6" key={index}>
                                            {isOpen && (
                                                <Lightbox
                                                    mainSrc={TabOne[tab1].bigImage}
                                                    nextSrc={TabOne[(tab1 + 1) % TabOne.length]}
                                                    prevSrc={TabOne[(tab1 + TabOne.length - 1) % TabOne.length]}
                                                    onCloseRequest={() => this.setState({ isOpen: false })}
                                                    onMovePrevRequest={() =>
                                                    this.setState({
                                                        tab1: (tab1 + TabOne.length - 1) % TabOne.length,
                                                    })
                                                    }
                                                    onMoveNextRequest={() =>
                                                        this.setState({
                                                            tab1: (tab1 + 1) % TabOne.length,
                                                        })
                                                    }
                                                />
                                            )}
                                            <div className="item-portfolio-static">
                                                <div onClick={() => this.setState({ isOpen: true, tab1: index })}>
                                                    <div className="portfolio-static">
                                                        <div className="thumbnail-inner">
                                                            <div className="thumbnail">
                                                                <a href="#portfolio-details">
                                                                    <img src={`/assets/images/portfolio/persona-${value.image}.svg`} alt="Portfolio Images"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <div className="inner">
                                                                <p>{value.category}</p>
                                                                <h4><a href="#portfolio-details">{value.title}</a></h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
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
                                        > Research: Opportunities</h4> 
                                        <p style = {{paddingBottom:'40px'}}>After isolating the pain points of these users, I outlined their core needs.</p>
                                    </div>
                                </div>    
                                <div className="col-lg-4 col-md-6 col-12">         
                                    <div className="single-column">
                                        <h5 className="tilte">Discoverability</h5>
                                            <p>Art Enthusiasts want a broader selection of Indigenous Artworks (both contemporary and non-contemporary) and Artists want their artworks to be discovered and understood by the non-Indigenous community.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 mt_sm--30">
                                    <div className="single-column">
                                        <h5 className="tilte">Convenience </h5>
                                            <p>Art Enthusiasts want an easy way to browse artworks instead of visiting galleries or searching through the internet and browsing virtual art galleries manually. Artist want a quick and easy way to promote their brand and artworks.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 mt_sm--30 mt_md--30">
                                    <div className="single-column">
                                        <h5 className="tilte">Interactivity</h5>
                                            <p>Art Enthusiasts want to connect with Artists to hear an authentic point of view on the artwork’s creation. Artists want a platform to share their unique stories and engage with the community to educate them about Indigenous culture. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-left">
                                        <h4 style = {{paddingTop: '100px'}} className="design-process-sub-heading"> Research: User Flows</h4>
                                    </div>
                                    <div className= "user-flows-desc">
                                        <p style = {{ paddingTop: '20px'}} > I created two user flow diagrams based on the personas that I created earlier. This helped the team to hash out user flows before building the product and visualise the user journey so we could optimise the user experience. It also helped to identify the screens we needed to create, acting as a blueprint for the development team to understand the big picture. </p>        
                                    </div>
                                </div>
                            </div>
                            <div style = {{ paddingTop: '40px'}} className="row mt--10">
                                <div className="col-lg-12">
                                    <div className="related-work mt--30 text-center">
                                        <img 
                                            style = {{
                                                width: null,
                                                resizeMode: 'contain',
                                                height: 400                                 
                                            }}
                                            src="/assets/images/portfolio/artist-user-flow.svg" alt="Artist User Flow" />                                                    
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="related-work mt--30 text-center">
                                        <img 
                                            style = {{
                                                width: null,
                                                resizeMode: 'contain',
                                                height: 400                                 
                                            }}
                                            src="/assets/images/portfolio/general-user-flow.svg" alt="General User Flow" />                                                    
                                    </div>
                                </div>    
                            </div>  
                        </div> 
                        <div style ={{paddingBottom:'40px', paddingtTop: '40px'}} className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-left">
                                        <h4 style = {{paddingTop: '100px'}} className="design-process-sub-heading"> Prototyping: Whiteboard Sketch</h4>
                                    </div>
                                    <div className= "user-flows-desc">
                                        <p style = {{ paddingTop: '20px'}} > During our initial brainstorming session, we determined that the aim of our application was to allow Indigenous artists to create a digital portfolio of their artworks and provide art enthusiasts with a platform to explore artworks. </p>  
                                        <p>I drew from familiar discovery applications such as Spotify to sketch an initial concept on a whiteboard. The sketch showcases the applications’ key pages including the login, onboarding, home and detail pages.</p>      
                                    </div>
                                    <div className="related-work mt--30 text-center">
                                        <img 
                                            style = {{
                                                paddingTop: '40px',
                                                width: null,
                                                resizeMode: 'contain',
                                                height: 600                                 
                                            }}
                                            src="assets/images/portfolio/whiteboard.svg" alt="Whiteboard Sketch" />                                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style ={{paddingBottom:'40px', paddingtTop: '40px'}} className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-left">
                                        <h4 style = {{paddingTop: '100px'}} className="design-process-sub-heading"> Prototyping: Low-Fidelity</h4>
                                    </div>
                                    <div className= "user-flows-desc">
                                        <p style = {{ paddingTop: '20px', paddingBottom: '40px'}} > After the initial sketches I developed, I designed greyscale wireframes using Figma to communicate our ideas quickly and easily to stakeholders without a high level of commitment and the extensive use of resources. </p>  
                                    </div>
                                    <div className="related-work mt--30 text-center">
                                        <img 
                                            style = {{
                                                width: null,
                                                resizeMode: 'contain',
                                                height: 450                                 
                                            }}
                                            src="/assets/images/portfolio/low-fid-1.svg" alt="Low Fidelity Wireframes" />                                                    
                                    </div>
                                    <div className="related-work mt--30 text-center">
                                        <img 
                                            style = {{
                                                width: null,
                                                resizeMode: 'contain',
                                                height: 450                                 
                                            }}
                                            src="/assets/images/portfolio/low-fid-2.svg" alt="Low Fidelity Wireframes" />                                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style ={{paddingBottom:'40px', paddingtTop: '40px'}} className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-left">
                                        <h4 style = {{paddingTop: '100px'}} className="design-process-sub-heading"> Testing: Usability Workshops</h4>
                                    </div>
                                    <div className= "user-flows-desc">
                                        <p style = {{paddingTop: '20px'}} > Throughout the development process, I led the organisation and execution of usability testing workshops with University Students and Indigenous Artists to collect rich user feedback. </p>  
                                        <p style = {{paddingBottom: '20px'}}> These usability workshops were task-based, prompting users to conduct actions, and documenting their comments and observations. The team opted for quality over quantity, conducting tests with 2-3 users during each release, allowing us to move quickly and keep our sprint momentum.</p>
                                    </div>
                                </div>    
                                <div className= "col-lg-6 col-md-6 col-12">
                                    <div className="related-work mt--30">
                                        <img 
                                            style = {{
                                                width: null,
                                                resizeMode: 'contain',
                                                height: 360                                 
                                            }}
                                        src = "/assets/images/portfolio/big/testing-3.png" alt = "Usability Workshop" />                                                    
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="related-work mt--30">
                                        <img 
                                            style = {{
                                                width: null,
                                                resizeMode: 'contain',
                                                height: 360                                 
                                            }}
                                        src= "/assets/images/portfolio/big/testing-4.png" alt = "Usability Workshop" />                                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style ={{paddingBottom:'40px', paddingtTop: '40px'}}className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title">
                                        <span className="subtitle"></span>
                                        <h4 
                                            style = {{
                                                paddingTop: '40px'
                                            }}
                                        className="title">Testing: User Insights</h4>
                                    </div>
                                    <div className= "user-flows-desc">
                                        <p style = {{paddingTop: '20px'}} > First impressions from users were positive, with many liking the intuitive and familiar layout of the application. </p>  
                                        <h5>Summary of Findings</h5>
                                        <ul style = {{ paddingTop: '20px'}} className="list-style--1">
                                            <li><FiCheck /> The top navigation bar was hardly used - users indicated preference for a bottom navigation bar over an expandable top navigation menu</li>
                                            <li><FiCheck /> There was no quick way to see all of the galleries/artworks in each section - users wanted a ‘View All’ option for each of the subheadings in the Home Page, so they didn’t have to swipe horizontally for too long if they didn’t find an artwork/gallery they were interested in</li>
                                            <li><FiCheck /> The navigation icon was mistaken for a button and users expected to be directed to a map view - make the map icon smaller and add a map view into the gallery details page </li>
                                            <li><FiCheck /> Users didn’t know the artist profile was clickable - signify that the artist profile is clickable by making it a card view and underlining the Artist’s name</li>
                                            <li><FiCheck /> More information on artworks would be great such as the type of artwork (e.g., Oil, Acrylic etc.) and size - add category tags in artwork details page </li>
                                        </ul>
                                        <p style = {{paddingTop: '20px'}}>Feedback from testers was carefully considered when developing further design iterations of the application.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style = {{paddingBottom:'40px'}}className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title">
                                        <span className="subtitle"></span>
                                        <h4 style = {{paddingTop: '40px'}}
                                        className="title">Testing: Prioritising Features & Improvements</h4>
                                    </div>
                                    <div className= "testing-prioritisation-desc"></div>
                                    <p style = {{paddingTop: '20px'}}>After conducting tests with end users, new feature requests were popping up, which meant we needed to prioritise features and evaluate the scope of our application to avoid feature and scope creep.</p>
                                    <p style = {{paddingBottom: '20px'}}>I led a feature prioritisation session based on the RICE Prioritisation Model, which considered the reach, impact, confidence and effort required to develop each feature. The higher the RICE score, the more desirable the feature was to implement.</p>
                                    <div className="related-work mt--30 text-center">
                                        <img 
                                            style = {{
                                                paddingTop:'40px',
                                                width: null,
                                                resizeMode: 'contain',
                                                height: 450                                 
                                            }}
                                            src="/assets/images/portfolio/feature-prio.svg" alt="Feature Prioritisation Matrix" />                                                    
                                    </div>
                                </div>
                            </div>
                        </div>  
                        <div style = {{paddingBottom:'40px'}}className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title">
                                        <span className="subtitle"></span>
                                        <h4 style = {{paddingTop: '40px'}} className="title">Prototyping: Style Guide</h4>
                                    </div>
                                    <div className= "style-guide-desc"></div>
                                    <p style = {{paddingTop: '20px', paddingBottom:'20px'}}>For Dreamtime’s design, I wanted to incorporate a lively yet minimal colour palette. I decided to use shades of orange as the primary colour, as warm tones of orange are commonly used in Indigenous artworks to represent the earth. Grey was used as a secondary colour to complement the vibrant tones of orange and create a sense of minimalism. Additional vectors are used to keep the design modern and invoke a sense of abstractness and creativity. </p>
                                    <div className="related-work mt--30 text-center">
                                        <img 
                                            style = {{
                                                paddingTop:'40px',
                                                width: null,
                                                resizeMode: 'contain',
                                                height: 380                                 
                                            }}
                                            src="/assets/images/portfolio/style-guide.svg" alt="Application Style Guide" />                                                    
                                    </div>
                                </div>
                            </div> 
                        </div> 
                        <div style = {{paddingBottom:'100px'}} className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title">
                                        <span className="subtitle"></span>
                                        <h4 style = {{paddingTop: '40px'}} className="title">Prototyping: High-Fidelity</h4>
                                    </div>
                                    <div className= "style-guide-desc"></div>
                                    <p style = {{paddingTop: '20px', paddingBottom:'20px'}}>Below are the final high-fidelity wireframes that were created in Figma, visually outlining each step of the user’s journey. </p>
                                    <div style = {{paddingTop:'40px'}}className="app-wireframe-carousel">
                                        <AliceCarousel>
                                            <img src = "/assets/images/portfolio/high-fid-1.svg" alt ="Prototype: High-Fid"/>                                     
                                            <img src = "/assets/images/portfolio/high-fid-2.svg" alt ="Prototype: High-Fid"/>                                     
                                            <img src = "/assets/images/portfolio/high-fid-3.svg" alt ="Prototype: High-Fid"/>                                     
                                            <img src = "/assets/images/portfolio/high-fid-4.svg" alt ="Prototype: High-Fid"/>                                     
                                            <img src = "/assets/images/portfolio/high-fid-5.svg" alt ="Prototype: High-Fid"/>  
                                            <img src = "/assets/images/portfolio/high-fid-6.svg" alt ="Prototype: High-Fid"/>                                                                        
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
                                        </div>
                                    </div>
                                </div>
                                <div style ={{paddingTop:'40px'}} className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className= "reflection-learning-desc"></div>
                                            <h4 style = {{paddingTop: '20px'}}>Prioritise, test, repeat</h4>
                                            <p style = {{paddingTop: '20px', paddingBottom:'20px'}}>Deliver your most important features first and get them to the end user as soon as you can, as it will ensure these features can undergo several testing and refinement cycles. It’s helpful to quantify feature prioritisation by scoring features on a range of metrics instead of assigning them ambiguous labels like ‘low priority’, ‘medium priority’ and ‘high priority’. This way the team will have laser focus and your users will be impressed with how well developed your features are. </p>
                                            <h4>Virtual testing is a blessing in disguise </h4>
                                            <p style = {{paddingTop: '20px', paddingBottom:'20px'}}>Virtual testing is a blessing in disguise – while it was certainly a challenge to conduct testing over Zoom, virtual testing  created an opportunity for us to expand our testing to capture a broader range of target users, which we may not have been able to do given geographic restrictions (e.g., we were able to connect with Indigenous Artists from all over Sydney). Given the emotional barriers created by virtual testing, it was especially important to connect with testers on a human level by having meaningful conversations to gain their trust.  </p>
                                            <h4>Constantly seek feedback from the team </h4>
                                            <p style = {{paddingTop: '20px', paddingBottom:'20px'}}>Constantly seek feedback from the team – when you are part of virtual team environment, it can be difficult to have those small feedback conversations that were possible in person (e.g., when you’re waiting to enter a meeting room). I learnt that its important to be proactive and intentional in seeking feedback from those around you. Throughout the project, I actively sought feedback from the team, which I applied to increase the positive impact of my contributions. For example, after consulting with our Scrum Master, I identified that I could improve my communication with the development team. As a result of this feedback, I improved my documentation by working with the Product Owner to attach an image of my prototype to each relevant story, so the development team had a clear understanding of the expected output.</p>
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
export default PortfolioDetails;
