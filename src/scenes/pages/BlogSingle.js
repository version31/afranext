import React from "react";
import {Row, Col} from "react-grid-system";
import {Link} from "react-router-dom";
import Footer from "../../components/footer/Footer";
import HeaderNext from "../../components/header/HeaderNext";

import {IoMdArrowBack} from "react-icons/all";
import BlogContent from "../../sections/blog/BlogContent";

function BlogSingle() {
    return (
        <>
            <HeaderNext/>
            <BlogContent/>
            <Footer/>
        </>
    );
}

export default BlogSingle;
