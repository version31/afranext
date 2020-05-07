import React from 'react';
import {Container, Row, Col} from 'react-grid-system';

// Components
import Header from "../../components/header/Header";
import Heading from "../../components/common/Heading";
import Features from "../../sections/features/Features";
import Story from "../../sections/story/Story";
import Newsletter from "../../sections/newsletter/Newsletter";
import Blog from "../../sections/blog/Blog";
import Quote from "../../sections/quote/Quote";

function Home() {
    return (
        <>
            <Header/>
            <section className="section section-hero section-hero-1">
                <div className="display-center">
                    <Container>
                        <Row>
                            <Col xl={6}>
                                <Heading h1="Drive More Customers Through Digital"
                                         description="Chap fantastic skive off chancer knees up starkers easy peasy up the kyver David, bleeding the BBC tomfoolery chimney!"/>
                                <button className="button button-xl button-primary button-block button-shape">Get
                                    Started
                                </button>
                            </Col>
                            <Col xl={6}>
                                <img src="/assets/images/hero/1-1.png" alt="alt"/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>





            <Features/>
            <Story/>
            <Newsletter/>
           <Blog/>

            <Quote/>





        </>
    )
}

export default Home;
