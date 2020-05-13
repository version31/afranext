import React from "react";
import {Container, Row, Col} from "react-grid-system";
import Heading from "../../components/common/Heading";
import Footer from "../../components/footer/Footer";
import HeaderNext from "../../components/header/HeaderNext";

function Contact() {
    return (
        <>
            <HeaderNext/>
            <section className="section section-story section-story-about">
                <div className="display-spacing">
                    <Container className="story-container display-spacing">

                        <Heading
                            h1="Have an idea?   "
                            position = "center"
                            description="Drop us a message and let`s make it happen"
                        />

                        <Row>
                            <Col xl={12} >
                                <form className="form form-1 max-w-768 div-center" >
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-6">
                                            <div className="form-item">
                                                <input type="text" placeholder="Your Name" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6">
                                            <div className="form-item">
                                                <input type="email" placeholder="Your Email" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-item">
                                                <textarea placeholder="Your Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="button button-block button-primary button-shape">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </Col>
                        </Row>
                    </Container>

                </div>
            </section>
            <Footer/>
        </>
    );
}

export default Contact;
