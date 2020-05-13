import React from "react";
import {Container, Row, Col} from "react-grid-system";
import { FaCrown} from "react-icons/all";

import Heading from "../../components/common/Heading";


const stories = [
    {
        title: "Get tips & tricks on how to Afranext your sales.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.",
        image: "/assets/images/story/1-1.jpg",
        items: [
            {
                h3: "Speed Optimization",
                p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.",
                icon: <FaCrown/>,
            },
            {
                h3: "Parallax Support",
                p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.",
                icon: <FaCrown/>,
            }
        ]
    },

    {
        title: "Get tips & tricks on how to Afranext your sales.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.",
        image: "/assets/images/story/1-2.jpg",
        items: [
            {
                h3: "SEO Friendly",
                p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.",
                icon: <FaCrown/>,
            },
            {
                h3: "Responsive Layout",
                p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.",
                icon: <FaCrown/>,
            }
        ]
    }
];

function Story(props) {
    return (
        <section className="section section-story section-story-1">
            <div className="display-spacing">

                {stories.map((story, index) => (
                    <Container key={index} className="story-container">
                        <Row className="mb--45">
                            <Col xl={6} md={6} className="column column-1">
                                <Heading title={story.title} description={story.description}/>
                                <Row>
                                    <Col xl={9} md={9}>
                                        {story.items.map((item, index) => (
                                            <div className="story-item" key={index}>
                                                <button className="button button-circle button-icon-xl button-primary">
                                                    {item.icon}
                                                </button>
                                                <h3>{item.h3}</h3>
                                                <p>{item.p}</p>
                                            </div>
                                        ))}

                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={6} md={6} className="column column-2">
                                <div className="story-image">
                                    <img src={story.image} alt="alt"/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                ))}

            </div>
        </section>
    )
}

export default Story;
