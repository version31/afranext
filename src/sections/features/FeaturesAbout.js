import React from 'react';
import {Container, Row, Col} from 'react-grid-system';
import Heading from "../../components/common/Heading";

const featureList = [
    {
        title: "Innovation inspired",
        description: "We hold a hand on a pulse of the newest development tendencies in the digital world. At our disposal, we have various up to date tools to stay on top and provide our customers with the most innovative solutions.",
        image: "/assets/images/features/1-1.png",
    },
    {
        title: "Open minded",
        description: "We are the team of out of box thinkers. We are searching for challenging ideas to show how to make the impossible become possible and even real.",
        image: "/assets/images/features/1-2.png",
    },
    {
        title: "Client and result oriented",
        description: "We always value your ideas and your business needs. Explore your ideas in the most innovative way and implement it as your best business practice. Your success is the best reward for us.",
        image: "/assets/images/features/1-3.png",
    },
    {
        title: "Technology focused",
        description: "High tech tools and new technologies are the synonyms to successful business processes. We believe that providing innovative technologies to your business make your service unique, competitive and profitable.",
        image: "/assets/images/features/1-3.png",
    },
]

function FeaturesAbout(props) {
    return (
        <section className="section section-features section-features-1">
            <div className="display-spacing">
                <Container>
                    <Heading title="Who we are?" description="We are your easiest solution ever." position="center"/>
                    <Row className="mb--30">
                        {featureList.map((value, index) => (
                            <Col xl={6} md={6} key={index}>
                                <div className="feature-item">
                                    <div className="image">
                                        <img src={value.image} alt="alt"/>
                                    </div>
                                    <h3>{value.title}</h3>
                                    <p>{value.description}</p>

                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default FeaturesAbout;
