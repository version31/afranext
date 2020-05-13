import React from "react";
import { Container, Row, Col} from "react-grid-system";
import {Link} from "react-router-dom";

import {IoMdArrowBack} from "react-icons/all";

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

function BlogContent(props) {
    return (
        <section className="section section-post-single">
            <div className="display-spacing">
                <Container>
                    <div className="max-w-768 div-center">
                        <div className="back">
                            <Link to="/posts">
                                <IoMdArrowBack className="icon"/>
                                <span>Blog</span>
                            </Link>
                        </div>
                        <h1>File upload with Laravel and VueJS</h1>
                        <Row>
                            <Col xl={6} md={6}>
                                <div className="info">
                                    <div className="img">
                                        <img src="/assets/images/team/elham.png" alt="alt"/>
                                    </div>
                                    <span className="name">
                                        Arthur Henrique
                                    </span>

                                    <p>
                                        <span className="date">May 30, 2018</span>
                                        <span className="read-time">13 min read</span>
                                    </p>
                                </div>

                            </Col>
                            <Col xl={6} md={6}>

                            </Col>
                        </Row>
                        <div className="content">
                            <img src="https://miro.medium.com/max/2000/1*StRW_ST60986VaPpMGhlRQ.png" alt=""/>
                            <p>At some point in the development of a system, every developer will come across file
                                uploads. Of course, for those with less experience, this can be a bit tricky. And when
                                you want to make the system simpler and more practical for the end user, this task can
                                give you some headaches. This tutorial aims to be an initial step by step to facilitate
                                the development of this process.</p>

                            <h2>Prerequisites</h2>
                            <p>For this tutorial I will assume that you already have a Laravel project and have basic
                                knowledge in PHP, VueJS, and Laravel itself.
                                I will also assume that you will be using a modern browser with support for objects of
                                the FormData type.</p>

                            <h3>Prerequisites</h3>
                            <p>For this tutorial I will assume that you already have a Laravel project and have basic
                                knowledge in PHP, VueJS, and Laravel itself.
                                I will also assume that you will be using a modern browser with support for objects of
                                the FormData type.</p>

                            <h4>Prerequisites</h4>
                            <p>For this tutorial I will assume that you already have a Laravel project and have basic
                                knowledge in PHP, VueJS, and Laravel itself.
                                I will also assume that you will be using a modern browser with support for objects of
                                the FormData type.</p>

                            <h5>Prerequisites</h5>
                            <p>For this tutorial I will assume that you already have a Laravel project and have basic
                                knowledge in PHP, VueJS, and Laravel itself.
                                I will also assume that you will be using a modern browser with support for objects of
                                the FormData type.</p>

                            <h6>Prerequisites</h6>
                            <p>For this tutorial I will assume that you already have a Laravel project and have basic
                                knowledge in PHP, VueJS, and Laravel itself.
                                I will also assume that you will be using a modern browser with support for objects of
                                the FormData type.</p>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default BlogContent;
