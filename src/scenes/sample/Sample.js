import React from "react";
import { Row, Col} from "react-grid-system";

function Sample() {
    return (
        <>
          <Row>
              <Col xl={6} md={6}>
                  <div className="fl">
                      <img  src="/assets/images/mockups/1.png" alt="alt"/>
                      {/*<img  src="/assets/images/mockups/2.png" alt="alt"/>*/}
                      <img  src="/assets/images/mockups/3.png" alt="alt"/>
                      <img  src="/assets/images/mockups/4.png" alt="alt"/>
                      <img  src="/assets/images/mockups/5.png" alt="alt"/>
                      <img  src="/assets/images/mockups/6.png" alt="alt"/>
                  </div>
              </Col>
          </Row>

        </>
    );
}

export default Sample;
