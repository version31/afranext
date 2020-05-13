import React from "react";
import {Link} from "react-router-dom";
import {Container} from "react-grid-system";

function HeaderNext(props) {
    // let logo = <img src="/assets/images/logo/logo.png" alt="Aion" />;

    return (
        <header className={`app-header app-header-1`}>
            <Container>
                <div className="header-wrap">
                    <div className="header-left">


                        <div className="header-logo">
                            <Link to={"/"}>
                                AFRANEXT
                            </Link>

                        </div>


                    </div>
                    <div className="header-right">
                        <div className="header-menu">
                            <ul>
                                {items.map((item, index) => (
                                    <li key={index}>
                                        <Link to={item.url}>
                                            {item.title}
                                        </Link>
                                    </li>

                                ))}
                            </ul>
                        </div>

                        <Link to="/login">
                            <button className="button button-md button-line-dark button-radius">
                                Sign In
                            </button>
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    );
}

let items = [
    {
        url: "/",
        title: "Home",
        submenu: false,
    },
    {
        url: "/about-us",
        title: "About",
        submenu: false,
    },
    {
        url: "/service",
        title: "Service",
        submenu: false,
    },

    {
        url: "/contact",
        title: "Contact",
        submenu: false,
    },
];

export default HeaderNext;
