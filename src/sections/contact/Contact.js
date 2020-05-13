import React from "react";
import {Container, Row, Col} from "react-grid-system";
import Heading from "../../components/common/Heading";
import {Link} from "react-router-dom";

function Contact() {
    return (
        <>
            <section className="section section-action section-action-contact   ">
                    <div className="display-spacing">
                    <Container>
                        <Heading title={["Have a project? Let’s make it together!"]}  position="center"/>
                        <Row>
                            <Col  xl={4} md={4} sm={6}  ></Col>
                            <Col  xl={4} md={4} sm={6}  >
                                <div className="div-center">
                                    <Link to={"/contact"}>
                                        <button className="button button-xl button-block button-primary  button-shape">
                                            Contact Us
                                        </button>
                                    </Link>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    );
}

export default Contact;
