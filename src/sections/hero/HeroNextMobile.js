import React from "react";
import {Container, Row, Col} from "react-grid-system";
import Heading from "../../components/common/Heading";

import HeaderNext from "../../components/header/HeaderNext";


function HeroNextMobile() {
    return (
        <>
            <section className="section section-hero bg-primary section-hero-mobile">
                <HeaderNext/>
                <HeaderNext/>
                <div className="display-center">
                    <Container>
                        <Row>
                            <Col xl={6} md={6}>
                                <Heading
                                    h1={"Mobile App development"}
                                    // subTitle={"Let’s go Mobile world. Impactful custom app development it is about us."}
                                    description="Leverage our comprehensive approach for industry-specific solutions. We provide our clients with both cross-platform or native apps considering all business needs. We’ve been using the most innovative technologies to increase business security, improve key operations and provide an exceptional user experience for the customers.

"
                                />
                                <button className="button button-xl button-secondary button-block button-shape">Get
                                    Started
                                </button>

                            </Col>

                            <Col xl={6} md={6}>
                                <img className="img-holder" src="/assets/images/phones/iPhoneX-Right.png" alt="alt"/>
                            </Col>
                        </Row>
                    </Container>
                </div>


            </section>


        </>
    );
}

export default HeroNextMobile;
