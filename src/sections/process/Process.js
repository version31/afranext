import React from 'react';
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

function Process(props) {
    return (
        <section className="section section-features section-features-1">
            <div className="display-spacing">
                <Container>
                    <Heading position="center"
                             title="How does the design process look like"
                    />

                    <Row>
                        <Col>
                            <img src="assets/images/story/design-process.png" alt=""/>
                        </Col>
                    </Row>



                </Container>
            </div>
        </section>
    )
}

export default Process;
