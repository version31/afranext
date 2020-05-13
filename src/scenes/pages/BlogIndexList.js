import React from "react";
import {Container, Row, Col} from "react-grid-system";
import {Link} from "react-router-dom";
import HeaderNext from "../../components/header/HeaderNext";

import {FiSearch} from "react-icons/all";


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



const categories = [
    {
        name : "Fashion",
        count: 36
    },
    {
        name : "Food",
        count: 16
    },
    {
        name : "News",
        count: 22
    },
    {
        name : "Tuto",
        count: 107
    },
];
function BlogIndexList() {
    return (
        <div style={{background: "#f1f1f1"}}>
            <HeaderNext/>
            <section className="section section-post-index blog-grid">
                <div className="display-spacing">
                    <Container>
                        <Row>
                            <Col xl={8} md={8} >
                                <Row className="mb--30">
                                    {items.map((item, index) => (
                                        <Col xl={12} key={index}>
                                            <article>
                                                <div className="avatar" >
                                                    <img src={item.image} alt="alt"/>
                                                    <h2>{item.title}</h2>
                                                </div>

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
                                                    <p>{item.body}</p>
                                                </div>
                                            </article>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                            <Col xl={4} md={4}   >
                                <aside className="side-bar">
                                    <div className="group search-bar input-group sm">
                                        <input type="text" placeholder="Enter URL:"/>
                                        <button className="button button-secondary button-shape"><FiSearch
                                            className="icon"/>
                                        </button>
                                    </div>
                                    <div className="group  recent-post">
                                        <h5>Recent posts</h5>

                                        {items.map((item, index) => (
                                            <article key={index}>
                                                <Row nogutter={true}>
                                                    <Col xs={3}>
                                                        <div className="img">
                                                            <img src={item.image} alt="alt"/>
                                                        </div>
                                                    </Col>
                                                    <Col xs={9}>
                                                        <div className="content">
                                                            <h3>{item.title}</h3>
                                                            <p>
                                                                <span className="name">{item.user.name}</span>
                                                                <span className="date">{item.createdAt}</span>
                                                            </p>
                                                        </div>
                                                    </Col>
                                                </Row>


                                            </article>
                                        ))}
                                    </div>
                                    <div className="group  categories">
                                        <h5>Categories</h5>

                                        <ul>
                                            {categories.map((item, index) => (
                                                <Link to="#" key={index}>
                                                    <li>
                                                        <strong>{item.name}</strong>
                                                        <span>({item.count})</span>
                                                    </li>
                                                </Link>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="group  tags">
                                        <h5>Tags</h5>
                                        <ul>
                                            {categories.map((item, index) => (
                                                <Link to="#" key={index}>
                                                    <li>{item.name}</li>
                                                </Link>
                                            ))}
                                        </ul>
                                    </div>
                                </aside>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            {/*<Footer/>*/}
        </div>
    );
}


export default BlogIndexList;
