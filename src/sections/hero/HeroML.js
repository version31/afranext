import React from "react";
import {Container, Row, Col} from "react-grid-system";
import Heading from "../../components/common/Heading";

import HeaderNext from "../../components/header/HeaderNext";


function HeroML() {
    return (
        <>
            <section className="section section-hero  bg-primary section-hero-ml">
                <HeaderNext/>
                <span className="hero-scroll"></span>
                <span className="hero-scroll-line"></span>
                <div className="display-center">
                    <Container>
                        <Row>
                            <Col xl={6} md={6}>
                                <Heading
                                    h1="Artificial intelligence & Machine learning"
                                    subTitle="Transform into an AI-driven company, using machine learning models that bring complex solutions for your business needs."
                                    description="We use machine intelligence to increase and enhance customer experience and boost process and operational productivity in an innovative, effective, and trustful way. Our team of scientists has fundamental knowledge and expertise in designing, implementing and integrating artificial intelligence solutions specific to your industry demands."
                                />


                            </Col>
                        </Row>
                    </Container>

                </div>

                <div className="img-holder" style={{backgroundImage: `url(/assets/images/hero/ml-bg.png)`}}>
                    <div className="inner">
                        <img className="light" src="/assets/images/hero/ml-light.png" alt="alt"/>
                        <img className="brain" src="/assets/images/hero/ml-brain.png" alt="alt"/>


                        <div className="circle c1"></div>
                        <div className="circle c2"></div>
                        <div className="circle c3"></div>
                        <div className="circle c4"></div>
                        <div className="circle c5"></div>
                        <div className="circle c6"></div>
                        <div className="circle c7"></div>
                        <div className="circle c8"></div>
                        <div className="circle c9"></div>
                        <div className="circle c10"></div>


                    </div>
                </div>

            </section>
        </>
    );
}

export default HeroML;
