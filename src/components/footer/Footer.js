import React from "react";
import {Container, Row, Col} from "react-grid-system";
import {Link} from "react-router-dom";

const items = [
    {
        title: "Introducing the new Next theme",
        body: "Brolly off his nut A bit of how’s your father chancer in my flat chinwag bog skive.",
        image: "/assets/images/blog/1-1.jpg",
        url: "/posts/1",
        createdAt: "August 2021"
    },
    {
        title: "Buying the most of beautiful theme",
        body: "Brolly off his nut A bit of how’s your father chancer in my flat chinwag bog skive.",
        image: "/assets/images/blog/1-2.jpg",
        url: "/posts/1",
        createdAt: "May 2021"
    },

    {
        title: "Introducing the new Next theme",
        body: "Brolly off his nut A bit of how’s your father chancer in my flat chinwag bog skive.",
        image: "/assets/images/blog/1-1.jpg",
        url: "/posts/1",
        createdAt: "August 2021"
    },

];


const pages = [
    {
        url: "/",
        title: "Home",
        submenu: false,
    },
    {
        url: "/about-us",
        title: "About",
        submenu: false,
    },
    {
        url: "/service",
        title: "Service",
        submenu: false,
    },

    {
        url: "/contact",
        title: "Contact",
        submenu: false,
    },

    {
        url: "/login",
        title: "Sign in",
        submenu: false,
    },

];


const demos = [
    {
        title: "Design",
        url: "/design",
    },
    {
        title: "Web Development",
        url: "/web-development",
    },
    {
        title: "Mobile Development",
        url: "/mobile-development",
    },

    {
        title: "ML & AI",
        url: "/machine-learning",
    },


    {
        title: "Landing 01",
        url: "/landing1",
    },
    {
        title: "Landing 02",
        url: "/landing2",
    },


];


function Footer() {
    return (
        <footer className="section section-footer section-footer-1 ">
            <div className="display-spacing">
                <Container>
                    <div className="footer-container">
                        <Row>
                            <Col xl={3} md={3} sm={12}>
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
                            <Col xl={2} md={2} sm={6}>
                                <h3>Services</h3>
                                <ul className="links">
                                    {demos.map((item, index) => (
                                        <li key={index}>
                                            <h4><Link to={item.url}>{item.title}</Link></h4>
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                            <Col xl={2} md={2} sm={6}>
                                <h3>Pages</h3>
                                <ul className="links">
                                    {pages.map((item, index) => (
                                        <li key={index}>
                                            <h4><Link to={item.url}>{item.title}</Link></h4>
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                            <Col xl={5} md={5} sm={12}>
                                <h3>Articles</h3>
                                <ul className="articles">
                                    {items.map((item, index) => (
                                      <Link to={item.url} key={index}>
                                          <li>
                                              <div>
                                                  <img src={item.image} alt={item.title}/>
                                              </div>
                                              <div>
                                                  <h4>
                                                      {item.title}
                                                  </h4>
                                                  <p>{item.createdAt}</p>
                                              </div>
                                          </li>
                                      </Link>
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
        </footer>
    );
}

export default Footer;
