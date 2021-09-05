import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ProgressBar } from 'react-bootstrap';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Main skills",
        tab2 = "Awards",
        tab3 = "Experience",
        tab4 = "Education";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <div className={`rn-progress-bar progress-bar--1 mt_dec--10`}>
                                                <div className="single-progress">
                                                    <h6 className="title">UI Design</h6>
                                                    <ProgressBar now={90} />
                                                    <span className="label">90%</span>
                                                </div>

                                                <div className="single-progress">
                                                    <h6 className="title">UX Research</h6>
                                                    <ProgressBar now={85} />
                                                    <span className="label">85%</span>
                                                </div>

                                                <div className="single-progress">
                                                    <h6 className="title">Development</h6>
                                                    <ProgressBar now={60} />
                                                    <span className="label">60%</span>
                                                </div>

                                                <div className="single-progress">
                                                    <h6 className="title">Strategy</h6>
                                                    <ProgressBar now={80} />
                                                    <span className="label">80%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>


                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">UNSW Dean's List <span>- Top 3% of cohort</span></a> 2017 - 2018
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>



                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Business Analyst<span> - Hemisphere Digital</span></a> 2021 - Current
                                               </li>
                                               <li>
                                                   <a href="/service">Sales Consultant<span> - Myer</span></a> 2018 - 2021
                                               </li>
                                               <li>
                                                   <a href="/service">Technology Consultant Intern<span> - Deloitte Australia </span></a> 2020 - 2020
                                               </li>
                                               <li>
                                                   <a href="/service">Talent Acquisition Intern<span> - KPMG Australia </span></a> 2019 - 2019
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">B. Commerce/Information Systems<span> - UNSW, Sydney</span></a> 2017 - 2021
                                               </li>
                                               <li>
                                                   <a href="/service">Higher School Certificate<span> - Tempe High School</span></a> 2006 - 2016
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;