import React from "react";
import {Container, Row, Col} from "react-grid-system";
import Heading from "../../components/common/Heading";

const featureList = [
    {
        title: "Branding",
        description: "We provide our clients with branding and rebranding services. We express your vision of the brand – from simple idea until a recognizable brand. Our team of experts makes market research to develop the most suitable brand strategy for your product. We develop products and create brands that differ.",
        image: "/assets/images/features/clock.png",
    },
    {
        title: "UI/UX",
        description: "We use a bunch of tools that help us to make interface catch more attention and at the same time be simple, navigating and intuitive. We are not about standard solutions, we aim to add new meaning to your digital product and make users love it.",
        image: "/assets/images/features/responsive.png",
    },
    {
        title: "Animation",
        description: "Implementing blockchain technology to our development process help us to offer highly robust and customized solutions to businesses. With a new engineering approach our team of outstanding experts will take your business to the next level.",
        image: "/assets/images/features/speed.png",
    },


]


function FeaturesDesign() {
    return (
        <>
            <section className="section section-features section-features-mobile ">
                <div className="display-spacing">
                    <Container>
                        <Heading
                            position="center"
                            title="Features"
                        />
                        <Row className="mb--30">
                            {featureList.map((value, index) => (
                                <Col xl={4} md={4}   key={index}>
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

export default FeaturesDesign;
