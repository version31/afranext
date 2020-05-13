import React from 'react';
import HeaderNext from "../../components/header/HeaderNext";
import HeroNext from "../../sections/hero/HeroNext";
import FeaturesNext from "../../sections/features/FeaturesNext";
import Blog from "../../sections/blog/Blog";
import Quote from "../../sections/quote/Quote";
import Footer from "../../components/footer/Footer";

function Welcome() {
    return (
        <>
            <HeaderNext/>
            <HeroNext/>
            <FeaturesNext/>
            <Blog/>
            <Quote/>
            <Footer/>
        </>
    )
}

export default Welcome;
