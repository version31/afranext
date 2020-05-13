import React from "react";
import {Container, Row, Col} from "react-grid-system";
import Heading from "../../components/common/Heading";

const featureList = [
    {
        title: "React Js",
        description: "Brolly off his nut A bit of how’s your father chancer in my flat chinwag bog skive.",
        image: "/assets/images/features/react.png",
    },
    {
        title: "Vue JS",
        description: "Brolly off his nut A bit of how’s your father chancer in my flat chinwag bog skive.",
        image: "/assets/images/features/vue.png",
    },
    {
        title: "Django",
        description: "Brolly off his nut A bit of how’s your father chancer in my flat chinwag bog skive.",
        image: "/assets/images/features/django.png",
    },

    {
        title: "Node Js",
        description: "Brolly off his nut A bit of how’s your father chancer in my flat chinwag bog skive.",
        image: "/assets/images/features/node.png",
    },

    {
        title: "Laravel",
        description: "Brolly off his nut A bit of how’s your father chancer in my flat chinwag bog skive.",
        image: "/assets/images/features/laravel.png",
    },

    {
        title: "HTML 5",
        description: "Brolly off his nut A bit of how’s your father chancer in my flat chinwag bog skive.",
        image: "/assets/images/features/html.png",
    },
]


function FeaturesTools() {
    return (
        <>
            <section className="section section-features section-features-1">
                <div className="display-spacing">
                    <Container>
                        <Heading title="Let your ideas be implemented into reality with the core technologies." description="We use the most innovative up to date tools to provide you with the highest development standards." position="center"/>
                        <Row className="mb--30">
                            {featureList.map((value, index) => (
                                <Col xl={2} md={2} sm={4} key={index}>
                                    <div className="feature-item">
                                        <div className="image">
                                            <img src={value.image} alt="alt"/>
                                        </div>
                                        <h3>{value.title}</h3>

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

export default FeaturesTools;
