import React from "react";
import {Container, Row, Col} from "react-grid-system";
import Heading from "../../components/common/Heading";
import Quote from "../../sections/quote/Quote";
import Slider1 from "../../components/common/Slider1";
import {Link} from "react-router-dom";

const items = [
    {
        title: "Introducing the new Next theme",
        body: "Brolly off his nut A bit of how’s your father chancer in my flat chinwag bog skive.",
        image: "/assets/images/blog/1-1.jpg",
        url: "#",
        createdAt: "August 2021"
    },
    {
        title: "Buying the most of beautiful theme",
        body: "Brolly off his nut A bit of how’s your father chancer in my flat chinwag bog skive.",
        image: "/assets/images/blog/1-2.jpg",
        url: "#",
        createdAt: "May 2021"
    },

    {
        title: "Introducing the new Next theme",
        body: "Brolly off his nut A bit of how’s your father chancer in my flat chinwag bog skive.",
        image: "/assets/images/blog/1-1.jpg",
        url: "#",
        createdAt: "August 2021"
    },

];


const pages = [
    {
        title: "Company",
        url: "#",
    },
    {
        title: "Blog",
        url: "#",
    },
    {
        title: "Documentation",
        url: "#",
    },
    {
        title: "Careers",
        url: "#",
    },
    {
        title: "Case studies",
        url: "#",
    },
    {
        title: "Pricing",
        url: "#",
    },

];


const demos = [
    {
        title: "Landing 01",
        url: "#",
    },
    {
        title: "Landing 02",
        url: "#",
    },
    {
        title: "Landing 03",
        url: "#",
    },
    {
        title: "Landing 04",
        url: "#",
    },
    {
        title: "Landing 05",
        url: "#",
    },
    {
        title: "Landing 06",
        url: "#",
    },

];


function Footer() {
    return (
        <section className="section section-footer section-footer-1">
            <div className="display-spacing">
                <Container>
                    <div className="footer-container">
                        <Row>
                            <Col xl={3}>
                                <h2>NUXT</h2>
                                <div className="info">
                                    <p>
                                        <a href="tel:+11112222707">(+1) 111-222-2707</a>
                                        {/*<a href="mailto: info@afracode.com">info@afracode.com</a>*/}
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. .
                                    </p>
                                </div>
                            </Col>
                            <Col xl={2}>
                                <h3>Demos</h3>
                                <ul className="links">
                                    {demos.map((item, index) => (
                                        <li key={index}>
                                            <h4><Link to={item.url}>{item.title}</Link></h4>
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                            <Col xl={2}>
                                <h3>Pages</h3>
                                <ul className="links">
                                    {pages.map((item, index) => (
                                        <li key={index}>
                                            <h4><Link to={item.url}>{item.title}</Link></h4>
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                            <Col xl={5}>
                                <h3>Articles</h3>
                                <ul className="articles">
                                    {items.map((item, index) => (
                                        <li>
                                            <div>
                                                <img src={item.image} alt={item.title}/>
                                            </div>
                                            <div>
                                                <h4>
                                                    <Link to={item.url}>
                                                        {item.title}
                                                    </Link>
                                                </h4>
                                                <p>{item.createdAt}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                        </Row>
                    </div>

                    <div className="copyright">
                        <p>Copyright ©2019 Nuxt by Afracode. All Rights Reserved. Terms of Use</p>
                    </div>

                </Container>
            </div>
        </section>
    );
}

export default Footer;
