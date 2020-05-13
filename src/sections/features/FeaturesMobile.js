import React from "react";
import {Container, Row, Col} from "react-grid-system";
import Heading from "../../components/common/Heading";

const featureList = [
    {
        title: ["Fast delivery "],
        description: "We know how to create your app in the shortest time - from user-facing front-end up to the server side behind it. With a set of tools that we use it is easy to get your app completely up and running.",
        image: "/assets/images/features/clock.png",
    },
    {
        title: ["Adaptable and ",  "modifying "],
        description: "We focus on native end-user experience. Our ready-made modules and layered architecture allows to make any changes extremely fast which leads to remarkable and expressive designs.",
        image: "/assets/images/features/responsive.png",
    },
    {
        title: "Excellent performance",
        description: "We pay attention to every principle platform difference such as fronts, scrolling, navigation to provide full native performance on IOS and android.",
        image: "/assets/images/features/speed.png",
    },


]


function FeaturesMobile() {
    return (
        <>
            <section className="section section-features section-features-mobile concave">
                <div className="display-spacing">
                    <Container>
                        <Heading
                            position="center"
                            title="We are professionals in React Native and Flutter"
                        />
                        <Row className="mb--30">
                            {featureList.map((value, index) => (
                                <Col xl={4} md={4}    key={index}>
                                    <div className="feature-item">


                                        <header>
                                            <Row nogutter={false}>
                                                <Col>
                                                    <div className="image div-center">
                                                        <img src={value.image} alt="alt"/>
                                                    </div>
                                                </Col>
                                                <Col xs={8}>
                                                    <div className="heading ">
                                                        <h3>{value.title}</h3>
                                                    </div>
                                                </Col>
                                            </Row>


                                        </header>
                                        <p>{value.description}</p>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    );
}

export default FeaturesMobile;
