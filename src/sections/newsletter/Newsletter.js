import React from "react";
import {Container, Row, Col} from "react-grid-system";
import {FaGem, FaCrown, FaSend} from "react-icons/all";

import Heading from "../../components/common/Heading";

function Newsletter(props) {
    return (
        <section className="section section-newsletter section-newsletter-1">
            <div className="display-spacing">
                <Container>
                    <Row>
                        <Col xl={7} >
                            <Heading
                                title={["Check your", <br/>, "Website’s SEO!"]}
                                description="Faff about only a quid blower I don’t want
no agro bleeding chimney pot burke tosser
cras nice one boot fanny."/>


                            <div className="input-group">
                                <input type="text" placeholder="Enter URL:"/>
                                <div className="input-group-append">
                                    <button className="button button-md button-secondary button-block button-shape">Get
                                        Started
                                    </button>
                                </div>
                            </div>

                        </Col>
                        <Col xl={4} >
                            <img className="left" src="/assets/images/phones/iPhoneX-left.png" alt="alt"/>
                            <img className="right" src="/assets/images/phones/iPhoneX-Right.png" alt="alt"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Newsletter;
