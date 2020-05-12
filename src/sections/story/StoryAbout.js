import React from "react";
import {Container, Row, Col} from "react-grid-system";
import {FaGem, FaCrown} from "react-icons/all";

import Heading from "../../components/common/Heading";

function StoryAbout(props) {
    return (
        <section className="section section-story section-story-about">
            <div className="display-spacing">
                <Container className="story-container">
                    <Row className="mb--45">
                        <Col xl={7} className="column column-1">
                            <Heading
                                title="We offer"    />
                            <Row>
                                <Col >
                                    <div className="story-item">
                                        <button className="button button-circle button-icon-xl button-primary">
                                            <FaGem/>
                                        </button>
                                        <h3>Design</h3>
                                        <p>We create delightful design and branding – intuitive, simple, unique. We will mold your ideal into design aimed to inspire and grow your business</p>
                                    </div>
                                    <div className="story-item">
                                        <button className="button button-circle button-icon-xl button-primary">
                                            <FaCrown/>
                                        </button>
                                        <h3>App development</h3>
                                        <p>Going mobile we will help your business to establish an application and bring value to the demanding modern customers. With our new approach in mobile app development we will help our clients succeed with a mobile strategy.</p>
                                    </div>

                                    <div className="story-item">
                                        <button className="button button-circle button-icon-xl button-primary">
                                            <FaCrown/>
                                        </button>
                                        <h3>Web development</h3>
                                        <p>We know different ways how to make your project perform in today’s competitive marketplace. Our team pursue the highest quality of back-end as well as front-end experience.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={5} className="column column-2">
                            <div className="story-image">
                                <img src="/assets/images/phones/mobile-app-4.png" alt="alt"/>
                            </div>
                        </Col>

                    </Row>
                </Container>

            </div>
        </section>
    )
}

export default StoryAbout;
