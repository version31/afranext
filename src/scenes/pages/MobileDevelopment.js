import React from 'react';
import HeroNextMobile from "../../sections/hero/HeroNextMobile";
import Footer from "../../components/footer/Footer";
import Contact from "../../sections/contact/Contact";
import StoryMobile from "../../sections/story/StoryMobile";
import FeaturesMobile from "../../sections/features/FeaturesMobile";

function MobileDevelopment() {
    return (
        <>
            <HeroNextMobile/>
            <FeaturesMobile/>
            <StoryMobile/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default MobileDevelopment;
