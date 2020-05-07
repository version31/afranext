import React from "react";
import {Container, Row, Col} from "react-grid-system";
import {FaGem, FaCrown, FaSend} from "react-icons/all";

import Heading from "../../components/common/Heading";

function Story(props) {
    return (
        <section className="section section-story section-story-1">
            <div className="display-spacing">
                <Container>
                    <Row className="mb--45">
                        <Col xl={6} className="column column-1">
                            <Heading title="Get tips & tricks on how to skyrocket your sales." description="Faff about only a quid blower I don’t want
no agro bleeding chimney pot burke tosser
cras nice one boot fanny."/>
                            <Row>
                                <Col xl={9}>
                                    <div className="story-item">
                                        <button className="button button-circle button-icon-xl button-primary">
                                            <FaGem/>
                                        </button>
                                        <h3>Speed Optimization</h3>
                                        <p>Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit sed do.</p>
                                    </div>
                                    <div className="story-item">
                                        <button className="button button-circle button-icon-xl button-primary">
                                            <FaCrown/>
                                        </button>
                                        <h3>Speed Optimization</h3>
                                        <p>Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit sed do.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={6} className="column column-2">
                            <div className="story-image">
                                <img src="/assets/images/story/1-1.jpg" alt="alt"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="display-spacing">
                <Container>
                    <Row className="mb--45">
                        <Col xl={6} className="column column-1">
                            <Heading title="Get tips & tricks on how to skyrocket your sales." description="Faff about only a quid blower I don’t want
no agro bleeding chimney pot burke tosser
cras nice one boot fanny."/>
                            <Row>
                                <Col xl={9}>
                                    <div className="story-item">
                                        <button className="button button-circle button-icon-xl button-primary">
                                            <FaGem/>
                                        </button>
                                        <h3>Speed Optimization</h3>
                                        <p>Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit sed do.</p>
                                    </div>
                                    <div className="story-item">
                                        <button className="button button-circle button-icon-xl button-primary">
                                            <FaCrown/>
                                        </button>
                                        <h3>Speed Optimization</h3>
                                        <p>Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit sed do.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={6} className="column column-2">
                            <div className="story-image">
                                <img src="/assets/images/story/1-1.jpg" alt="alt"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="display-spacing">
                <Container>
                    <Row className="mb--45">
                        <Col xl={6} className="column column-1">
                            <Heading title="Get tips & tricks on how to skyrocket your sales." description="Faff about only a quid blower I don’t want
no agro bleeding chimney pot burke tosser
cras nice one boot fanny."/>
                            <Row>
                                <Col xl={9}>
                                    <div className="story-item">
                                        <button className="button button-circle button-icon-xl button-primary">
                                            <FaGem/>
                                        </button>
                                        <h3>Speed Optimization</h3>
                                        <p>Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit sed do.</p>
                                    </div>
                                    <div className="story-item">
                                        <button className="button button-circle button-icon-xl button-primary">
                                            <FaCrown/>
                                        </button>
                                        <h3>Speed Optimization</h3>
                                        <p>Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit sed do.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={6} className="column column-2">
                            <div className="story-image">
                                <img src="/assets/images/story/1-1.jpg" alt="alt"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Story;
