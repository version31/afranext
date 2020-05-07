import React from "react";
import Slider from "react-slick";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

export default function Slider1(props) {
    const {className, children} = props;

    const sliderSettings = {
        arrows: true,
        prevArrow: <SamplePrevArrow/>,
        nextArrow: <SampleNextArrow/>,
    };

    return (
        <Slider {...sliderSettings} className={className}>
            {children}
        </Slider>
    );
}

function SamplePrevArrow(props) {
    const {style, onClick} = props;

    return (
        <button type="button" className="button button-md  button-shape button-arrow button-arrow-left button-default"

                style={{...style}}
                onClick={onClick}>
            <span className="icon-arrow arrow-left"></span>
        </button>
    );
}

function SampleNextArrow(props) {
    const {style, onClick} = props;

    return (
        <button type="button" className="button button-md button-primary button-shape button-arrow button-arrow-right"
                style={{...style}}
                onClick={onClick}>
            <span className="icon-arrow arrow-right"></span>
        </button>
    );
}
