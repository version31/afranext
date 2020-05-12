import React from "react";
import {Container, Row, Col} from "react-grid-system";

import Heading from "../../components/common/Heading";

const items = [
    {
        title: "Empathise",
        body: "It is an important stage to gain insights about the challenge we are faced with. We involve the best experts to find out all concerns through analysis, engaging and emphasizing with people. It helps us to set aside any possible assumptions and define which goals should we achieve.",
        image: "/assets/images/story/design-1.jpg",
    },
    {
        title: "Define the problem",
        body: "After our research, we collect all information and identify core problems. This stage requires you to share your vision and goal with us. It helps us to stay on the same page with you and it's easier for our designers to create right features and functions to boost your business and solve the issue.",
        image: "/assets/images/story/design-2.jpg",
    },
    {
        title: "Ideate",
        body: "We create as many ideas for problem solutions as possible at the beginning of the Ideation phase. We analyze the market, learn competitors weak and strong sides, determine the target audience needs. It helps us to reduce looses and fails in future.",
        image: "/assets/images/story/design-3.jpg",
    },
    {
        title: "Prototype",
        body: "As soon as a visual aspect is clear, we proceed to a technical part of design. At this stage we engage in product our development team and find out the most efficient ways of implementing it in your project. It means that we create not only design, we know the best way how to perform it into real.",
        image: "/assets/images/story/design-4.jpg",
    },

    {
        title: "Test",
        body: "Since all designs are agreed, we start the development process. From day one we do testing to make sure that the product meets criteria and requirements. Before the launch we make one more testing to ensure that the final user will get only a pleasant experience using your product",
        image: "/assets/images/story/design-5.jpg",
    },
];


function StoryDesign(props) {
    return (
        <section className="section section-story section-story-design">
            <div className="display-spacing">
                <Heading position="center"
                         title="How does the design process look like"
                />

                <div className="process-holder">
                    <img src="assets/images/story/design-process.png" alt=""/>
                </div>

                {items.map((item, index) => (
                    <Container className="story-container">

                        <Row className="mb--45">
                            <Col xl={6} className="column column-1" >
                                <div className="heading-holder">
                                    <div className="display-center">
                                        <Heading
                                            title={item.title}
                                            description={item.body}
                                        />
                                    </div>
                                </div>

                            </Col>
                            <Col xl={6} className="column column-2" >
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

export default StoryDesign;
