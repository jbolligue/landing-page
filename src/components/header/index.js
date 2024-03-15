import React, { useState } from "react";
import Container from '../container';
import { StaticImage } from 'gatsby-plugin-image';
import * as style from './style.module.scss';

const Header = () =>{
  const [showDiv, setShowDiv] = useState(false);
  const toggleDiv = () => { setShowDiv(!showDiv); };
  return (
    <div className={ style.header }>
        <Container color='header'>
          <div className={ style.navbarInner }>
            <a className={ style.logo } href="/"><StaticImage alt="Logo" src="../../images/logo.webp" /></a>
            <div className={ style.cta }>
              <a className={ [style.ctaButton, style.black].join(" ") } href="/">Client Login</a>
              <a className={ [style.ctaButton, style.orange].join(" ") } href="/">Book a Demo</a>
            </div>
            <div className={ style.navbarMobile }>
                <button className={ style.navbarMobileBtn } onClick={toggleDiv}>
                    <span className={ style.lines }></span>
                    <span className={ style.lines }></span>
                    <span className={ style.lines }></span>
                </button>
            </div>
          </div>
          {showDiv && 
          <div className={ style.navbarMobileCollapsable }>
              <ul className={ style.navbarMobileMenu }>
                  <li className={ style.mobileMenu }><a href="/#" className={ style.mobileLoginBtn }>Client Login</a></li>
                  <li className={ style.mobileMenu }><a href="/#" className={ style.mobileDemoBtn }>Book a Demo</a></li>
              </ul>
          </div>
          }
        </Container>
    </div>
  )
}

export default Header;