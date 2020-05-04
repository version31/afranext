import React from "react";
import { Container, Row, Col } from "react-grid-system";

function Sample() {
    return (
        <>
            <section className="section section-sample section-sample-1">
                <div className="display-spacing">
                    <Container>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                <div className="sample-card text-center">
                                    <h1 className="text-primary">Sample</h1>
                                    <h2 className="shadow-1">Just something for sample.</h2>
                                    <p className="max-w-576 div-center">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do. <span className="text-gradient">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit sed do.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    );
}

export default Sample;
