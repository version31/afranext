import React from 'react';
import {Container, Row, Col} from 'react-grid-system';

function Header() {
    return (
        <header className="app-header">
            <Container>
                <Row>
                    <Col xl={2}>
                        <div className="header-logo">
                            <img src="/assets/image/logo/logo.png" alt="Logo"/>
                        </div>
                    </Col>
                    <Col xl={8}>
                        <ul className="header-menu">

                        </ul>
                    </Col>
                    <Col xl={2}>
                        <button class="button button-md button-line-dark" type="button">Sign In</button>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header;
