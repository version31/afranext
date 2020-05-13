import React from "react";
import {Container, Row, Col} from "react-grid-system";

import Heading from "../../components/common/Heading";

function Newsletter() {
    return (
        <section className="section section-newsletter section-newsletter-1">
            <div className="display-spacing">
                <Container>
                    <Row>
                        <Col xl={7} md={7} >
                            <Heading
                                title="Check your Website’s SEO!"
                                description="Faff about only a quid blower I don’t want
no agro bleeding chimney pot burke tosser
cras nice one boot fanny."/>


                            <div className="input-group">
                                <input type="text" placeholder="Enter URL:"/>
                                <button className="button button-md button-secondary  button-shape">Get
                                    Started
                                </button>
                            </div>

                        </Col>
                        <Col xl={4} md={4} sm={6}   >
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
