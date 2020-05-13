import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-grid-system';
import Heading from "../../components/common/Heading";

const featureList = [
    {
        title: "UI/UX DESIGN",
        description: "Design that suits your business",
        image: "/assets/images/features/1-1.png",
        url: "design",
    },
    {
        title: "WEB DEVELOPMENT",
        description: "Future Web Platform",
        image: "/assets/images/features/1-3.png",
        url: "web-development",
    },
    {
        title: "MOBILE DEVELOPMENT",
        description: "Let’s go Mobile world",
        image: "/assets/images/features/1-2.png",
        url: "mobile-development",
    },

]

function FeaturesNext(props) {
    return (
        <section className="section section-features section-features-1">
            <div className="display-spacing">
                <Container>
                    <Heading title="Services"  position="center"/>
                    <Row className="mb--30">
                        {featureList.map((value, index) => (
                            <Col xl={4} md={4} sm={6} key={index}>
                                <div className="feature-item">
                                    <div className="image">
                                        <img src={value.image} alt="alt"/>
                                    </div>
                                    <h3>{value.title}</h3>
                                    <p>{value.description}</p>
                                    <Link to={value.url}>
                                        <button className="button button-md button-primary button-shape button-arrow">
                                            <span className="icon-arrow arrow-right"></span>
                                        </button>

                                    </Link>

                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default FeaturesNext;
