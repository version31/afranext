import React from "react";
import {FaQuoteLeft} from "react-icons/fa";
import {Container, Row, Col} from "react-grid-system";

// Components
import Slider1 from "../../components/common/Slider1";
import Heading from "../../components/common/Heading";

function MLManager(props) {

    const {image, name, role, bio, title, description} = props;
    return (
        <section className="section section-testimonial section-testimonial-manager">
            <div className="display-spacing">
                <Heading title={title}
                         description={description} position="center"/>
                <Container>
                    <Slider1 className="el-slider-1">
                        <div className="item">
                            <Row>
                                <Col xl={5}>
                                    <div className="testimonial-image">
                                        <div className="circle">
                                            <div className="image overlay-image"
                                                 style={{backgroundImage: `url(${image})`}}></div>
                                        </div>
                                        <FaQuoteLeft className="icon"/>
                                    </div>
                                </Col>
                                <Col xl={7}>
                                    <div className="testimonial-item">
                                        <div>
                                            <span className="name">{name}</span>
                                            <span className="role">{role}</span>
                                        </div>
                                        <p>{bio}</p>
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

export default MLManager;
