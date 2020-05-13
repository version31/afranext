import React from 'react';
import HeaderNext from "../../components/header/HeaderNext";
import HeroNextWeb from "../../sections/hero/HeroNextDesign";
import StoryDesign from "../../sections/story/StoryDesign";
import Footer from "../../components/footer/Footer";
import Contact from "../../sections/contact/Contact";
import MLManager from "../../sections/quote/MLManager";
import FeaturesDesign from "../../sections/features/FeaturesDesign";

function Design() {
    return (
        <>
            <HeaderNext/>
            <HeroNextWeb/>
            <StoryDesign/>

            <FeaturesDesign/>
            <MLManager
                image = "/assets/images/team/maryam.jpg"
                title = "Meet the Design team Manager"
                description = "To get your project underway simply
trust your idea to the team of experts."
                name = "MAryam sharifi Neyestani"
                role = "CTO"
                bio = "Maryam has been working to create high-quality single page applications for the last six years. He specializes in web technologies such as ReactJs, VueJs, ReactNative and  has experience with multiple front end and back end JavaScript frameworks."
            />
            <Contact/>
            <Footer/>
        </>
    )
}

export default Design;
