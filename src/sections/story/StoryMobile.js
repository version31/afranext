import React from "react";
import {Container, Row, Col} from "react-grid-system";

import Heading from "../../components/common/Heading";

const items = [
    {
        title: "Discover & Estimate",
        body: "We collect and analyze your requirements to solve the challenge and bring the best solution considering timeline and budget. As soon as we get your main and agreed app features and design, we are ready to start the journey.",
        image: "/assets/images/story/web-1.jpg",
    },
    {
        title: "Design & Clickable prototype",
        body: "Based on expertise that we’ve got after the first stage, we proceed to clickable prototype creation. We will make sure that you get couple layouts to choose the best way to perform them into UI/UX design.",
        image: "/assets/images/story/web-2.jpg",
    },
    {
        title: "APP development",
        body: "Design creation closely relates with development process. We divide development into sprints which gives us a chance to demonstrate you results of our work and get your feedback at every touchpoint.",
        image: "/assets/images/story/web-3.jpg",
    },
    {
        title: "Testing",
        body: "Quality assurance is necessary for flawless app releases. We put on duty the team of experts that fix any possible bugs and defects and ensure your software goes like a clockwork.",
        image: "/assets/images/story/web-4.jpg",
    },

    {
        title: "Deployment",
        body: "After all work is done, we are ready to show your product to the world and deliver the most enjoyable user experience for your customers.",
        image: "/assets/images/story/web-5.jpg",
    },

    {
        title: "Maintenance",
        body: "After the product release, we support and improve your app to meet demanding end users needs in future. Our team stay in touch with you and ready to help with any issue at any time.",
        image: "/assets/images/story/web-6.jpg",
    },
];



function StoryMobile(props) {
    return (
        <section className="section section-story section-story-web concave">
            <div className="display-spacing ">
                <Heading position="center"
                         title="It’s easy go"
                />



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

export default StoryMobile;
