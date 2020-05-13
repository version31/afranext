import React from 'react';

import HeroNextWeb from "../../sections/hero/HeroNextWeb";
import Footer from "../../components/footer/Footer";
import StoryWeb from "../../sections/story/StoryWeb";
import FeaturesTools from "../../sections/features/FeaturesTools";
import Contact from "../../sections/contact/Contact";

function Web() {
    return (
        <>
            <HeroNextWeb/>
            <StoryWeb/>
            <FeaturesTools/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Web;
