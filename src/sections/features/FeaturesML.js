import React from "react";
import {Container, Row, Col} from "react-grid-system";
import {FaGem} from "react-icons/all";

import Heading from "../../components/common/Heading";


const items = [
    {
        title : "Decision-Making Solution",
        body : "Decision making has never been so simple. Automate business decisions with our AI-powered Decision-Making Solution. Innovative algorithmic and predictive system helps to find and choose the most suitable decisions.",
        avatar : "",
    },
        {
        title : "Predictive Modeling",
        body : "Our Predictive Modeling solution helps businesses evaluate customer lifecycle, find more advantageous marketing strategies, consider product pricing creation, and provide better customer service.",
        avatar : "",
    },
        {
        title : "Chat bots",
        body : "Brilliant support, as well as great customer experience, now is possible with our top-notch AI-driven chatbots and virtual agents, which provide contextual and personalized customer conversations.",
        avatar : "",
    },
    {
        title: "Computer vision",
        body: "Our Computer vision empowers machines to identify and process pictures in the same way as a human does. With Computer Vision artificial systems are able to access compound data and provide a high level of information.",
        avatar: "",
    },

];

function FeaturesML(props) {
    return (
        <section className="section section-story section-story-about concave">
            <div className="display-spacing">
                <Container className="story-container">
                    <Row className="mb--45">
                        <Col xl={12} className="column column-1">
                            <Heading
                                title="We offer"
                                position="center"
                            />
                            <Row>

                                {items.map((item, index)=>(
                                    <Col xl={6} md={6} key={index}>
                                        <div className="story-item">
                                            <button className="button button-circle button-icon-xl button-primary">
                                                <FaGem/>
                                            </button>
                                            <h3>{item.title}</h3>
                                            <p>{item.body}</p>
                                        </div>
                                    </Col>
                                ))}


                            </Row>
                        </Col>

                    </Row>
                </Container>

            </div>
        </section>
    )
}

export default FeaturesML;
