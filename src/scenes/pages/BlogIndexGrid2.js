import React from "react";
import {Container, Row, Col} from "react-grid-system";
import HeaderNext from "../../components/header/HeaderNext";



const items = [
    {
        title: "We are working at almos twice the capacity",
        body: "Intro to article Dolor sit amet, consectetur adipiscing elit. Phasellus feugiat elit vitae enim lacinia semper. ",
        image: "/assets/images/blog/1-1.jpg",
        url: "/posts/1",
        createdAt: "27 May, 2019",
        user: {
            name: "Kourosh",
            image: "/assets/images/team/elham.png",
        }
    },
    {
        title: "Mail Metrics Receive",
        body: "Brolly off his nut A bit of how’s your father chancer in my flat chinwag bog skive.",
        image: "/assets/images/blog/1-2.jpg",
        url: "/posts/1",
        createdAt: "27 May, 2019",
        user: {
            name: "Ali Sharifineyestani",
            image: "/assets/images/blog/1-1.jpg",
        }
    },
    {
        title: "Mail Metrics Receive",
        body: "Brolly off his nut A bit of how’s your father chancer in my flat chinwag bog skive.",
        image: "/assets/images/blog/1-3.jpg",
        url: "/posts/1",
        createdAt: "27 May, 2019",
        user: {
            name: "Ali Sharifineyestani",
            image: "/assets/images/blog/1-1.jpg",
        }
    },
    {
        title: "We are working at almos twice the capacity",
        body: "Intro to article Dolor sit amet, consectetur adipiscing elit. Phasellus feugiat elit vitae enim lacinia semper. ",
        image: "/assets/images/blog/1-1.jpg",
        url: "/posts/1",
        createdAt: "27 May, 2019",
        user: {
            name: "Kourosh",
            image: "/assets/images/team/elham.png",
        }
    },
    {
        title: "Mail Metrics Receive",
        body: "Brolly off his nut A bit of how’s your father chancer in my flat chinwag bog skive.",
        image: "/assets/images/blog/1-2.jpg",
        url: "/posts/1",
        createdAt: "27 May, 2019",
        user: {
            name: "Ali Sharifineyestani",
            image: "/assets/images/blog/1-1.jpg",
        }
    },
    {
        title: "Mail Metrics Receive",
        body: "Brolly off his nut A bit of how’s your father chancer in my flat chinwag bog skive.",
        image: "/assets/images/blog/1-3.jpg",
        url: "/posts/1",
        createdAt: "27 May, 2019",
        user: {
            name: "Ali Sharifineyestani",
            image: "/assets/images/blog/1-1.jpg",
        }
    },
];




function BlogIndexGrid2() {
    return (
        <div style={{background: "#f1f1f1"}}>
            <HeaderNext/>
            <section className="section section-post-index blog-grid">
                <div className="display-spacing">
                    <Container>
                        <Row>
                            <Col xl={12}>
                                <Row className="mb--30">
                                    {items.map((item, index) => (
                                        <Col xl={4} md={4}   key={index}>
                                            <article>
                                                <img src={item.image} alt="alt"/>
                                                <div className="content">
                                                    <div className="info">
                                                        <div className="img">
                                                            <img src="/assets/images/team/elham.png" alt="alt"/>
                                                        </div>
                                                        <p>
                                                            <span className="name">{item.user.name}</span>
                                                            <span className="date">{item.createdAt}</span>
                                                        </p>
                                                    </div>

                                                    <h2>{item.title}</h2>
                                                    <p>{item.body}</p>
                                                </div>
                                            </article>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            {/*<Footer/>*/}
        </div>
    );
}


export default BlogIndexGrid2;
