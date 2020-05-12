import React from "react";
import {Container, Row, Col} from "react-grid-system";
import {Link} from "react-router-dom";

import Heading from "../../components/common/Heading";

const items = [
    {
        title: "Mail Metrics Receive",
        body: "Brolly off his nut A bit of how’s your father chancer in my flat chinwag bog skive.",
        image: "/assets/images/blog/1-1.jpg",
        url: "/posts/1",
    },
    {
        title: "Mail Metrics Receive",
        body: "Brolly off his nut A bit of how’s your father chancer in my flat chinwag bog skive.",
        image: "/assets/images/blog/1-2.jpg",
        url: "/posts/1",
    },
    {
        title: "Mail Metrics Receive",
        body: "Brolly off his nut A bit of how’s your father chancer in my flat chinwag bog skive.",
        image: "/assets/images/blog/1-3.jpg",
        url: "/posts/1",
    },
];

function Blog(props) {
    return (
        <section className="section section-blog section-blog-1 ">
            <div className="display-spacing">
                <Container>
                    <Heading title="Our case studies" description="The full monty burke posh excuse my French Richard cheeky bobby spiffing
 crikey Why gormless, pear shaped!" position="center"/>
                    <Row className="mb--30">

                        {items.map((item, index) => (
                            <Col xl={4} key={index}>
                                <div className="card">
                                    <div className="avatar">
                                        <img src={item.image} alt={item.title}/>
                                    </div>
                                    <div className="content">
                                        <h3>{item.title}</h3>
                                        <p>{item.body}</p>
                                        <Link to={item.url}>
                                            <button
                                                className="button button-md button-primary button-shape button-arrow">
                                                <span className="icon-arrow arrow-right"></span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        ))}


                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Blog;
