import React from "react";
import {Container, Row, Col} from "react-grid-system";
import Heading from "../../components/common/Heading";




function HeaderNext() {
    return (
        <>
            <section className="section section-hero section-hero-2">
                <div className="display-center">
                    <Container>
                        <Row>
                            <Col xl={6} md={6}>
                                <Heading
                                    h1="One idea can change the world."
                                    subTitle="New ideas will discover new worlds."
                                />


                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="img-holder" style={{backgroundImage: `url(/assets/images/hero/2-bg.png)`}}>
                    <div className="inner">
                        <img className="lamp" src="/assets/images/hero/2-lamp.png" alt="alt"/>
                        <img className="girl" src="/assets/images/hero/2-girl.png" alt="alt"/>

                        <img className="heart" src="/assets/images/hero/2-heart.png" alt="alt"/>
                        <img className="resize" src="/assets/images/hero/2-resize.png" alt="alt"/>
                        <img className="like" src="/assets/images/hero/2-like.png" alt="alt"/>
                        <div className="square one"></div>
                        <div className="square two"></div>
                        <div className="square three"></div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default HeaderNext;
