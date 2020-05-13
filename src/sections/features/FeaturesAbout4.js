import React from "react";
import {Container, Row, Col} from "react-grid-system";
import {FaGem} from "react-icons/all";

import Heading from "../../components/common/Heading";


const items = [
    {
        title : "Innovation inspired",
        body : "We hold a hand on a pulse of the newest development tendencies in the digital world. At our disposal, we have various up to date tools to stay on top and provide our customers with the most innovative solutions.",
        avatar : "",
    },
        {
        title : "Open minded",
        body : "We are the team of out of box thinkers. We are searching for challenging ideas to show how to make the impossible become possible and even real.",
        avatar : "",
    },
        {
        title : "Client and result oriented",
        body : "We always value your ideas and your business needs. Explore your ideas in the most innovative way and implement it as your best business practice. Your success is the best reward for us.",
        avatar : "",
    },
    {
        title: "Technology focused",
        body: "High tech tools and new technologies are the synonyms to successful business processes. We believe that providing innovative technologies to your business make your service unique, competitive and profitable.",
        avatar: "",
    },

];

function FeaturesAbout4(props) {
    return (
        <section className="section section-story section-story-about">
            <div className="display-spacing">
                <Container className="story-container">
                    <Row className="mb--45">
                        <Col xl={12} className="column column-1">
                            <Heading
                                title="Who we are?"
                                description="We are your easiest solution ever."
                                position="center"
                            />
                            <Row>

                                {items.map((item, index)=>(
                                    <Col xl={6} md={6}  key={index}>
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

export default FeaturesAbout4;
