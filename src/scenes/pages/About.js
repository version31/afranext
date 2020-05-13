import React from "react";
import StoryAbout from "../../sections/story/StoryAbout";
import Contact from "../../sections/contact/Contact";
import Footer from "../../components/footer/Footer";
import FeaturesAbout4 from "../../sections/features/FeaturesAbout4";
import HeroNextAbout from "../../sections/hero/HeroNextAbout";
import HeaderNext from "../../components/header/HeaderNext";

function About() {
    return (
        <>
            <HeaderNext/>
            <HeroNextAbout/>
            <FeaturesAbout4/>
            <StoryAbout/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default About;
