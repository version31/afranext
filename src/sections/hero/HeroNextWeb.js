import React from "react";
import {Container, Row, Col} from "react-grid-system";
import Heading from "../../components/common/Heading";
import HeaderNext from "../../components/header/HeaderNext";


function HeroNextWeb() {
    return (
        <>
            <section className="section section-hero bg-primary section-hero-web">
                <HeaderNext/>
                <HeaderNext/>
                <div className="display-center">
                    <Container>
                        <Row>
                            <Col xl={6} md={6}>
                                <Heading
                                    h1={"Web Development"}
                                    description="Catch your dream website or web application with us! As a full-stack web development company, we offer a wide range of custom end-to end solutions that boost your business and run it on the web. We put all our efforts to create web apps, services, and sites that meet your expectations and satisfy the business needs of your company."
                                />
                                <button className="button button-xl button-secondary button-block button-shape">Get
                                    Started
                                </button>

                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="img-holder" style={{backgroundImage: `url(/assets/images/hero/web-1.jpg)`}}>
                    <div className="inner">
                    </div>
                </div>

            </section>


        </>
    );
}

export default HeroNextWeb;
