import React, { Component } from "react";
import { Link } from 'react-router-dom';
const Portfolio_image = <img src="/assets/images/portfolio/portfolio-11.jpg" alt="Street Art" />;
const Portfolio_image2 = <img src="/assets/images/portfolio/portfolio-12.jpg" alt="Fashion" />;
const Portfolio_image3 = <img src="/assets/images/portfolio/portfolio-13.jpg" alt="Formula 1 Car" />;
const Portfolio_image4 = <img src="/assets/images/portfolio/portfolio-14.jpg" alt="Sydney Cricket Ground" />;
const Portfolio_image5 = <img src="/assets/images/portfolio/portfolio-15.jpg" alt="Exercise" />;
const Portfolio_image6 = <img src="/assets/images/portfolio/portfolio-16.jpg" alt="Library" />;

const PortfolioListContent = [
    {
        image: Portfolio_image,
        title: 'Digital Art',
        description: 'I love sketching on my drawing pad in my spare time. I often draw celebrities.'
    },
    {
        image: Portfolio_image2,
        title: 'Fashion',
        description: 'I’m a huge fashionista and I love thrift shopping and putting together different outfits.'
    },
    {
        image: Portfolio_image3,
        title: 'Cars',
        description: 'I’m a car guy. My dream car is the Nissan GTR. I love watching Formula 1!'
    },
    {
        image: Portfolio_image4,
        title: 'Cricket',
        description: 'I love watching and playing cricket. I’ve been playing cricket since I was 8 years old.'
    },
    {
        image: Portfolio_image5,
        title: 'Fitness',
        description: 'I practically live at the gym. Building muscle is a sort of therapy for me.'
    },
    {
        image: Portfolio_image6,
        title: 'Reading',
        description: 'Some of my favourite recent books include Shoe Dog and The Design of Everyday Things.'
    }
]

class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`im_portfolio ${styevariation}`}>
                            <div className="thumbnail_inner">
                                <div className="thumbnail">{value.image}
                                </div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <div className="portfolio_heading">
                                        <div className="category_list">{value.category}
                                        </div>
                                        <h4 
                                            style = {{
                                                marginBottom: '50px'
                                            }}
                                        className="title">{value.title}</h4>
                                    </div>
                                    <div className="portfolio_hover"><p>{value.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;