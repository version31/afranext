import React from "react";
import {Container, Row, Col} from "react-grid-system";

import Heading from "../../components/common/Heading";

const items = [
    {
        title: "Data Acquisition",
        body: "We analyze your business to find out what AI model will suit your company needs. We do detailed research to define how we can solve current issues, improve company performance and boost your profit.",
        image: "/assets/images/story/data-1.jpg",
    },
    {
        title: "Data Preparation",
        body: "After data acquisition we start to work on data transformation to use it with AI algorithms. AI can study information, learn from it, make decisions and act based on its experience.",
        image: "/assets/images/story/data-2.jpg",
    },
    {
        title: "Hypothesis & Modeling",
        body: "To find out what type of machine learning model will work the best with your business, we transform data used on the previous phase for the training and testing it with extra features.",
        image: "/assets/images/story/data-3.jpg",
    },
    {
        title: "Evaluation & Interpretation",
        body: "We choose the most effective machine learning algorithm and create a custom AI model for the engineering which fit all business needs of your enterprise.",
        image: "/assets/images/story/data-4.jpg",
    },

    {
        title: "Deployment",
        body: "We integrate the chosen AI model to the system and all processes in your business.",
        image: "/assets/images/story/data-5.jpg",
    },
    {
        title: "Optimization",
        body: "In the final phase, we check the machine learning model in work and make an improvement if needed.",
        image: "/assets/images/story/data-6.jpg",
    },
];


function StoryML(props) {
    return (
        <section className="section section-story section-story-design concave">
            <div className="display-spacing">
                <Heading position="center"
                         title="How does development process look like?"
                />

>

                {items.map((item, index) => (
                    <Container className="story-container" key={index}>

                        <Row className="mb--45">
                            <Col xl={6} md={6} className="column column-1" >
                                <div className="heading-holder">
                                    <div className="display-center">
                                        <Heading
                                            title={item.title}
                                            description={item.body}
                                        />
                                    </div>
                                </div>

                            </Col>
                            <Col xl={6} md={6} className="column column-2" >
                                <div className="story-image">
                                    <img src={item.image} alt="alt"/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                ))}

            </div>
        </section>
    )
}

export default StoryML;
