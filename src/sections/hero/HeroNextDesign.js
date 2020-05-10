import React from "react";
import {Container, Row, Col} from "react-grid-system";
import Heading from "../../components/common/Heading";

import Header from "../../components/header/Header";



function HeroNextDesign() {
    return (
        <>
            <section className="section section-hero section-hero-2">

                <div className="display-center">
                    <Container>
                        <Row>
                            <Col xl={6}>
                                <Heading
                                    h1={["UI/UX Design" ,<br/>, "Design that suits your business"]}
                                    description="Meet the greatest design solution for your product. We strongly believe that perfect design is key to customer loyalty. We combine our creativity and experience to find the best way how to impress your customers and make them love your product."
                                />


                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="img-holder" style={{backgroundImage: `url(/assets/images/hero/design-1.png)`}}>
                    <div className="inner">


                    </div>
                </div>

            </section>



        </>
    );
}

export default HeroNextDesign;
