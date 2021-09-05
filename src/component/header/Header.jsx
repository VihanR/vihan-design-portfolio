import React, { Component } from "react";
import { FiX , FiMenu} from "react-icons/fi";
import Scrollspy from 'react-scrollspy';
import { Link } from 'react-router-dom';



class Header extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        this.stickyHeader = this.stickyHeader.bind(this);

       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded');
        })
        
    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }

    stickyHeader () {}
    render(){
        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 100) {
                document.querySelector('.header--fixed').classList.add('sticky')
            }else{
                document.querySelector('.header--fixed').classList.remove('sticky')
            }
        });
        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        const {color='default-color' } = this.props;
 
        return(
            <header className={`header-area header-style-two header--fixed ${color}`}>
                <div className="header-wrapper">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-4 col-6">
                                    <div className="header-left">
                                        <div className="logo">
                                        </div>
                                    </div>
                                </div>
                            <div className="col-lg-9 col-md-8 col-6">
                                <div className="header-right justify-content-end">
                                    <nav className="mainmenunav d-lg-block ml--50">
                                        <Scrollspy className="mainmenu" items={['home','about','projects','play']} currentClassName="is-current" offset={-200}>
                                        <ul className="mainmenu">
                                            <li><Link to="/portfolio-landing">Home</Link></li>
                                            <li><Link to="/about" >About</Link></li>
                                            <li className="has-droupdown"><Link to="/portfolio-main" >Projects</Link>
                                                <ul className="submenu">
                                                    <li><Link to="/portfolio-details">Project Dreamtime</Link></li>
                                                    <li><Link to="/portfolio">Project CyberInk</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/gallery" >Play</Link></li>
                                        </ul>
                                        </Scrollspy>
                                    </nav>
                                </div>
                                <div className="header-right">
                                    <div className="header-btn">
                                    </div>
                                    {/* Start Humberger Menu  */}
                                    <div className="humberger-menu d-block d-lg-none pl--20 pl_sm--10">
                                        <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                                    </div>
                                    {/* End Humberger Menu  */}
                                    <div className="close-menu d-block d-lg-none">
                                        <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;