import React from "react";
import Container from '../container';
import { StaticImage } from 'gatsby-plugin-image';
import * as style from './style.module.scss';

const Footer = () =>{
    return (
        <>
        <Container color='bg'>
            <div className={ style.footer }>
                <section className={ style.footerContentSection }>
                    <div className={ style.footerContainer }>
                        <div className={ style.footerContent }>
                            <h1 className={ style.contentTitle }>Get a Deck</h1>
                            <p className={ style.contentDesc }>To download a deck please enter your work email address to proceed. At the moment it is available for <span> vehicle manufacturers only.</span></p>
                            <div className={ style.footerForm }>
                                <form onSubmit={null}>
                                    <input type='email' placeholder='email@here'/>
                                    <button type='submit'>Download</button>
                                </form>
                            </div>
                        </div>
                        <div className={ style.footerImage }>
                            <StaticImage alt="image3" src="../../images/img 3.png" />
                        </div>
                    </div>
                </section>
            </div>
        </Container>
        
        <section className={ style.footerInfoSection}>
            <div className={ style.footerContainer }>
                <div className={ style.footerCopyright }>
                    <p>Copyright © {(new Date().getFullYear())} Mobiry International Inc. All rights reserved. </p>
                </div>
                <div className={ style.footerSocials }>
                    <StaticImage alt="image3" src="../../images/linkedin.png" />
                </div>
            </div>
        </section>
        </>
    )
  }
  
  export default Footer;