import React, { Component } from 'react'
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';



const TabOne = [
    {
        image: '13',
        bigImage: '/assets/images/portfolio/big/khalid.jpg',
        category: 'Adobe Illustrator',
        title: 'Khalid (R&B Artist)'
    },
    {
        image: '14',
        bigImage: '/assets/images/portfolio/big/cole.jpg',
        category: 'Adobe Illustrator',
        title: 'J. Cole (Rap Artist)'
    },
    {
        image: '15',
        bigImage: '/assets/images/portfolio/big/tecca.jpg',
        category: 'Adobe Illustrator',
        title: 'Lil Tecca (Rap Artist)'
    },
    {
        image: '16',
        bigImage: '/assets/images/portfolio/big/smoke.jpg',
        category: 'Adobe Illustrator',
        title: 'Pop Smoke (Rap Artist)'
    },
    {
        image: '17',
        bigImage: '/assets/images/portfolio/big/mosey.jpg',
        category: 'Adobe Illustrator',
        title: 'Lil Mosey (Rap Arits)'
    },
    {
        image: '18',
        bigImage: '/assets/images/portfolio/big/logic.jpg',
        category: 'Adobe Illustrator',
        title: 'Logic (Rap Artist)'
    },
]

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab1: 0,
            isOpen: false,
        };
    }
    render() {
        const { tab1, isOpen } = this.state;
        return (
            <div>

            <PageHelmet pageTitle='My Artworks' />

            {/* Start Header Area  */}
            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
            {/* End Header Area  */}
            
            {/* Start Breadcrump Area */}
            <Breadcrumb title={'My Artworks'}   />
            {/* End Breadcrump Area */}

            {/* Start Page Wrapper  */}
            <main className="page-wrapper">

                {/* Start Portfolio Area  */}
                <div className="rn-portfolio-area ptb--120 bg_color--1 line-separator">
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
                                                            <img src={`/assets/images/portfolio/dp-portfolio-${value.image}.jpg`} alt="Portfolio Images"/>
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
                {/* End Portfolio Area  */}

            </main>
            {/* End Page Wrapper  */}

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            
            {/* Start Footer Area  */}
            <Footer />
            {/* End Footer Area  */}                
            </div>
        )
    }
}


export default Gallery;