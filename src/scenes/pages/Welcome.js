import React from 'react';

import HeaderNext from "../../components/header/HeaderNext";
import HeroNext from "../../sections/hero/HeroNext";
import FeaturesNext from "../../sections/features/FeaturesNext";
import Story from "../../sections/story/Story";
import Newsletter from "../../sections/newsletter/Newsletter";
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
