import React from "react";
import {Container, Row, Col} from "react-grid-system";
import {FaGem, FaCrown, FaSend} from "react-icons/all";

import Heading from "../../components/common/Heading";

const items = [
    {
        title: "Discover & Estimate",
        body: "Before the start, we make a research and deep analysis of the business-related industry to reduce technical and market risks while software development. We negotiate all requirement and write product specification considering your design suggestion. We discuss every detail while planning to satisfy your vision of the product.",
        image: "/assets/images/story/web-1.jpg",
    },
    {
        title: "Design",
        body: "After absorbing your requirements and transformed them into prototypes you can click on. We create a recognizable design with simple and intuitive navigation to deliver a pleasant user experience.",
        image: "/assets/images/story/web-2.jpg",
    },
    {
        title: "Development",
        body: "When we have designs our team of architects and engineers build the core of your product – secured, complex and trusted. We based our development process on agile methodology and it helps us to use time and resources in the most effective way, keep you updated and systematically demonstrate our results.",
        image: "/assets/images/story/web-3.jpg",
    },
    {
        title: "Testing",
        body: "According to our standards of a development process, we keep both manual and automation testing while lifecycle of product development. We make sure that every link, script and form act and work in a proper way.",
        image: "/assets/images/story/web-4.jpg",
    },

    {
        title: "Go live",
        body: "Once we finished testing and ensure that the product is stable, usable, secure and reliable, we are ready for the launch.",
        image: "/assets/images/story/web-5.jpg",
    },

    {
        title: "Maintenance",
        body: "There is always room for improvement as we all work in limitless progress. That`s why we stay in touch with a client even after products’ release and ready to solve any issue at any time.",
        image: "/assets/images/story/web-6.jpg",
    },
];



function StoryWeb(props) {
    return (
        <section className="section section-story section-story-1">
            <div className="display-spacing">
                <Heading position="center"
                         title="How does the design process look like"
                         description="We offer comprehensive services and professional support at every stage of cooperation."
                />


                {items.map((item, index) => (
                <Container className="story-container">



                    <Row className="mb--45">
                        <Col xl={6} className="column column-1">
                            <Heading
                                title={item.title}
                                description={item.body}
                            />

                        </Col>
                        <Col xl={6} className="column column-2">
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

export default StoryWeb;
