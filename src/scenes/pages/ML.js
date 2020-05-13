import React from 'react';
import HeroML from "../../sections/hero/HeroML";
import StoryML from "../../sections/story/StoryML";
import Footer from "../../components/footer/Footer";
import Contact from "../../sections/contact/Contact";
import FeaturesML from "../../sections/features/FeaturesML";
import FeaturesMLBenefit from "../../sections/features/FeaturesMLBenefit";
import MLManager from "../../sections/quote/MLManager";

function ML() {
    return (
        <>
            <HeroML/>
            <FeaturesML/>
            <StoryML/>
            <FeaturesMLBenefit/>
            <MLManager
                image = "/assets/images/team/elham.png"
                title = "Meet the Data Analysis team Manager"
                description = "To get your project underway simply
trust your idea to the team of experts."
                name = "Elham sharifi Neyestani"
                role = "CTO"
                bio = "Elham has a Ph.D.  in Engineering from Old Dominion University and a MS.c. in Engineering from sharif university of technology. She has over eight years of experience in numerical modeling, data analysis, and programming. Her specialities include: data analysis, Machine learning, and programming especially with Matlab, R, Python, and FORTRAN."
            />
            <Contact/>
            <Footer/>
        </>
    )
}

export default ML;
