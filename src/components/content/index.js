import React from "react";
import Container from '../container';
import { StaticImage } from 'gatsby-plugin-image';
import * as style from './style.module.scss';

const Content = () =>{
    return (
        <>
        <Container>
            <div className={ style.mainContent }>
                <section className={ style.sectionOne }>
                <div className={ style.contentContainer }>
                    <div className={ style.sectionOneContent }>
                        <h1 className={ style.contentTitle }>20 minute economy </h1>
                        <p className={ style.contentDesc }>We see the charging period, which takes around 20 minute with a supercharger, not as a drawback but as a valuable opportunity to enhance driver experience and create a new revenue stream for manufacturers and data partners.</p>
                    </div>
                    <div className={ style.sectionOneImage }>
                        <StaticImage alt="image1" src="../../images/img 1.png" />
                    </div>
                    </div>
                </section>
                <section className={ style.sectionTwo }>
                    <div className={ style.contentContainer }>
                        <div className={ style.sectionTwoImage }>
                            <StaticImage alt="image1" src="../../images/img 2.png" />
                        </div>
                        <div className={ style.sectionTwoContent }>
                            <StaticImage alt="image2" src="../../images/leaf.png" />
                            <h1 className={ style.contentTitle }>Replace EV Anxiety with EV Calmness</h1>
                            <p className={ style.contentDesc }>At Mobiry, we recognize that the fear of range anxiety and the perceived inconvenience of charging times are major barriers to electric vehicle (EV) adoption.  Our vision is to transform this time into a positive experience and a chance for car manufacturers to stand out. 
                            <br /><br />
                            What's more, this service isn't limited to EVs—it can also benefit owners of gasoline-powered vehicles, making every journey more enjoyable and rewarding.</p>
                        </div>
                    </div>
                </section>
            </div>
        </Container>
        </>
    )
  }
  
  export default Content;