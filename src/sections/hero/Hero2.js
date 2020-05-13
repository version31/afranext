import React from "react";
import {Container, Row, Col} from "react-grid-system";
import Heading from "../../components/common/Heading";




function Hero2() {
    return (
        <>
            <section className="section  section-hero-2">

                <div className="display-center">
                    <Container>
                        <Row>
                            <Col xl={6} md={6}>
                                <div className="img-holder" >

                                    <div className="inner">
                                        <div className="b1"></div>
                                        <img className="t1" src="/assets/images/mockups/tablet1.png" alt="alt"/>
                                        <img className="t2" src="/assets/images/mockups/tablet2.png" alt="alt"/>
                                        <img className="t3" src="/assets/images/mockups/tablet3.png" alt="alt"/>
                                        <img className="i1" src="/assets/images/mockups/iphonex1.png" alt="alt"/>
                                        {/*<img  src="/assets/images/mockups/3.png" alt="alt"/>*/}
                                        {/*<img  src="/assets/images/mockups/4.png" alt="alt"/>*/}
                                        {/*<img  src="/assets/images/mockups/5.png" alt="alt"/>*/}
                                        {/*<img  src="/assets/images/mockups/6.png" alt="alt"/>*/}
                                    </div>
                                </div>

                            </Col>
                            <Col xl={6} md={6}>
                                <Heading
                                    h1={"Drive More Customers Through Digital"}
                                    // subTitle={"Let’s go Mobile world. Impactful custom app development it is about us."}
                                    description="Leverage our comprehensive approach for industry-specific solutions. We provide our clients with both cross-platform or native apps considering all business needs. We’ve been using the most innovative technologies to increase business security, improve key operations and provide an exceptional user experience for the customers.

"
                                />
                                <button className="button button-xl button-primary button-block button-shape">Get
                                    Started
                                </button>

                            </Col>
                        </Row>
                    </Container>
                </div>


            </section>
        </>
    );
}

export default Hero2;
