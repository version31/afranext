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
import Footer from "../../components/footer/Footer";
import Hero from "../../sections/hero/Hero";

function Landing1() {
    return (
        <>
            <Header/>
            <Hero/>
            <Features/>
            <Story/>
            <Newsletter/>
            <Blog/>
            <Quote/>
            <Footer/>
        </>
    )
}

export default Landing1;
