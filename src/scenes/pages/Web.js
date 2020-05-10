import React from 'react';

import HeaderNext from "../../components/header/HeaderNext";
import HeroNextWeb from "../../sections/hero/HeroNextWeb";
import FeaturesNext from "../../sections/features/FeaturesNext";
import Story from "../../sections/story/Story";
import Newsletter from "../../sections/newsletter/Newsletter";
import Blog from "../../sections/blog/Blog";
import Quote from "../../sections/quote/Quote";
import Footer from "../../components/footer/Footer";
import Process from "../../sections/process/Process";
import StoryWeb from "../../sections/story/StoryWeb";

function Web() {
    return (
        <>
            <HeroNextWeb/>
            <StoryWeb/>
            <Footer/>
        </>
    )
}

export default Web;
