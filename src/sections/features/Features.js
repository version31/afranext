import React from 'react';
import {Container, Row, Col} from 'react-grid-system';
import Heading from "../../components/common/Heading";

const featureList = [
    {
        title: "Mail Metrics Receive",
        description: "Brolly off his nut A bit of how’s your father chancer in my flat chinwag bog skive.",
        image: "/assets/images/features/1-1.png",
    },
    {
        title: "Mail Metrics Receive",
        description: "Brolly off his nut A bit of how’s your father chancer in my flat chinwag bog skive.",
        image: "/assets/images/features/1-2.png",
    },
    {
        title: "Mail Metrics Receive",
        description: "Brolly off his nut A bit of how’s your father chancer in my flat chinwag bog skive.",
        image: "/assets/images/features/1-3.png",
    },
]

function Features(props) {
    return (
        <section className="section section-features section-features-1">
            <div className="display-spacing">
                <Container>
                    <Heading title="How does it work?" description="The full monty burke posh excuse my French Richard cheeky bobby spiffing
 crikey Why gormless, pear shaped!" position="center"/>
                    <Row className="mb--30">
                        {featureList.map((value, index) => (
                            <Col xl={4} key={index}>
                                <div className="feature-item">
                                    <div className="image">
                                        <img src={value.image} alt="alt"/>
                                    </div>
                                    <h3>{value.title}</h3>
                                    <p>{value.description}</p>
                                    <button className="button button-md button-primary button-shape">
                                        Arrow
                                    </button>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Features;
