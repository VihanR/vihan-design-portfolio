import React, { Component } from "react";
import emailjs from 'emailjs-com';
import ContactForm from "../../blocks/ContactForm";
import { name } from "file-loader";

class ContactOne extends Component{
    constructor(props){
        super(props);
        this.state = {
            rnName: '',
            rnEmail: '',
            rnSubject: '',
            rnMessage: '',
        };
    }

    render(){

        function sendEmail(e) {
            e.preventDefault();

            emailjs.sendForm('service_93y44vz', 'template_0d9kqgf', e.target, 'user_Pu43TJ7rva0lDkZfooSFY')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });

              e.target["name"].value = [];
              e.target["email"].value = [];
              e.target["subject"].value = [];
              e.target["message"].value = [];
        }

        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <span 
                                     style = {{
                                        paddingTop: '50px'
                                    }}        
                                className="subtitle">Let's Say Hi</span>
                                <h2 className="title">Hire Me.</h2>
                                <div className="im_address_inner">
                                    <div className="im_address mt--5">
                                        <span>Email:</span>
                                        <a className="link im-hover" href="mailto:ramanayakevihan@gmail.com">ramanayakevihan@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="form-wrapper">
                                <form className = "contact-form" onSubmit={sendEmail}>
                                    <label htmlFor="item01">
                                        <input
                                            type="text"
                                            name="name"
                                            id="item01"
                                            value={this.state.rnName}
                                            onChange={(e)=>{this.setState({rnName: e.target.value});}}
                                            placeholder="Your Name *"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="email"
                                            id="item02"
                                            value={this.state.rnEmail}
                                            onChange={(e)=>{this.setState({rnEmail: e.target.value});}}
                                            placeholder="Your email *"
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="item03"
                                            value={this.state.rnSubject}
                                            onChange={(e)=>{this.setState({rnSubject: e.target.value});}}
                                            placeholder="Write a Subject"
                                        />
                                    </label>
                                    <label htmlFor="item04">
                                        <textarea
                                            type="text"
                                            id="item04"
                                            name="message"
                                            value={this.state.rnMessage}
                                            onChange={(e)=>{this.setState({rnMessage: e.target.value});}}
                                            placeholder="Your Message"
                                        />
                                    </label>
                                    <button className="btn-default" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit Now</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img 
                                     style = {{
                                        marginTop: '80px'
                                    }}        
                                src="/assets/images/about/about-contact.jpg" alt="trydo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactOne;