import React from "react";
import {FaQuoteLeft} from "react-icons/fa";
import {Container, Row, Col} from "react-grid-system";

// Components
import Slider1 from "../../components/common/Slider1";
import Heading from "../../components/common/Heading";

function Quotes() {
    return (
        <section className="section section-testimonial section-testimonial-2">
            <div className="display-spacing">
                <Heading title="Customers are lovin’ it"
                         description="Check testimonials for our satisfied clients" position="center"/>
                <Container>
                    <Slider1 className="el-slider-1">
                        <div className="item">
                            <Row>
                                <Col xl={5}>
                                    <div className="testimonial-image">
                                        <div className="circle">
                                            <div className="image overlay-image"
                                                 style={{backgroundImage: `url(/assets/images/testimonial/2.jpg)`}}></div>
                                        </div>
                                        <FaQuoteLeft className="icon"/>
                                    </div>
                                </Col>
                                <Col xl={7}>
                                    <div className="testimonial-item">
                                        <div>
                                            <span className="name">Mary Neyestani</span>
                                            <span className="role">UI / UX Designer</span>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim enim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat.</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="item">
                            <Row>
                                <Col xl={5}>
                                    <div className="testimonial-image">
                                        <div className="circle">
                                            <div className="image overlay-image"
                                                 style={{backgroundImage: `url(/assets/images/testimonial/2.jpg)`}}></div>
                                        </div>
                                        <FaQuoteLeft className="icon"/>
                                    </div>
                                </Col>
                                <Col xl={7}>
                                    <div className="testimonial-item">
                                        <div>
                                            <span className="name">Rabie Maxwell</span>
                                            <span className="role">Owner & Design Lead</span>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim enim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat.</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Slider1>
                </Container>
            </div>
        </section>
    );
}

export default Quotes;
