import React, { Component } from "react";
import { FiSend } from "react-icons/fi";

import { Link } from 'react-router-dom';
class About extends Component{
    render(){
        let title = 'Designing for Impact',
        description = 'I am a Commerce/Information Systems Graduate from the University of New South Wales passionate about all things tech, entrepreneurship and design.',
        description2 = 'I am obsessed with creating and building things, whether that be beautiful, elegant solutions and products, my own body (I’m an avid gym-goer), my wardrobe (I’m a huge fashionista) or digital art (I love sketching on my drawing pad!).',
        description3= 'During my time in the workforce and at university, I’ve been exposed to all facets of product development, from building databases to designing the interface of web and mobile applications.  I’m seeking to apply my design and leadership skills to build impactful products.';
       
        return(
            <React.Fragment>
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-5 col-md-12">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/about-1.png" alt="About Images"/>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <div className="icon">
                                            <FiSend />
                                        </div>
                                        <h2 className="title">{title}</h2>
                                        <p className="description">{description}</p>
                                        <p className="description">{description2}</p>
                                        <p className="description">{description3}</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default About;