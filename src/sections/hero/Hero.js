import React from "react";
import {Container, Row, Col} from "react-grid-system";
import Heading from "../../components/common/Heading";

import Header from "../../components/header/Header";



function Hero() {
    return (
        <>
            <Header/>
            <section className="section section-hero section-hero-1">
                <div className="display-center">
                    <Container>
                        <Row>
                            <Col xl={6} md={6}>
                                <Heading h1="Drive More Customers Through Digital"
                                         description="Chap fantastic skive off chancer knees up starkers easy peasy up the kyver David, bleeding the BBC tomfoolery chimney!"/>
                                <button className="button button-xl button-primary button-block button-shape">Get
                                    Started
                                </button>
                            </Col>
                            <Col xl={6} md={6}>
                                <img src="/assets/images/hero/1-1.png" alt="alt"/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    );
}

export default Hero;
