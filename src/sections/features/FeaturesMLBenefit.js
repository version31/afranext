import React from "react";
import {Container, Row, Col} from "react-grid-system";
import Heading from "../../components/common/Heading";

const featureList = [
    {
        title: "Sales",
        ul: [
            "Improve sales forecasting",
            "Interpret customer data",
            "Predict customer needs",
            "Efficient transactional sales",
            "Sales communication",
        ],
        image: "/assets/images/features/sale.png",
    },
    {
        title: "Banking & Finance",
        ul: [
            "Detecting fraud",
            "Underwriting loan/insurance",
            "Algorithmic trading",
            "Portfolio management",
            "Sentiment/new analysis",
            "Customer service",
        ],
        image: "/assets/images/features/accounting.png",
    },
    {
        title: "Marketing",
        ul: [
            "Personalize mail campaigns",
            "Precisely meet the customer’s requirements",
            "Offer customized offers to customers",
            "Analyze previous buying patterns"
        ],
        image: "/assets/images/features/computer.png",
    },

    {
        title: "Human Resources",
        ul: [
            " Track and assess applicants",
            " Attract relevant talent",
            " Detect attrition",
            " Individual skill management"
        ],
        image: "/assets/images/features/resume.png",
    },


]


function FeaturesMLBenefit() {
    return (
        <>
            <section className="section section-features section-features-ml-benefit concave">
                <div className="display-spacing">
                    <Container>
                        <Heading
                            title="How ML can benefit your business?"
                            description="ML helps to extract important information from limitless raw data. Implemented in the right way, ML can serve as a solution to a variety of business problems, and predict complex customer behaviors. There are some areas listed below where ML can help your business be one step ahead."
                        />
                        <Row className="mb--30">
                            {featureList.map((value, index) => (
                                <Col xl={3} md={3} key={index}>
                                    <div className="feature-item">


                                        <header>
                                            <Row nogutter={false}>
                                                <Col>
                                                    <div className="image div-center">
                                                        <img src={value.image} alt="alt"/>
                                                    </div>
                                                </Col>
                                                <Col xs={8}>
                                                    <div className="heading ">
                                                        <h3>{value.title}</h3>
                                                    </div>
                                                </Col>
                                            </Row>


                                        </header>
                                        <ul>
                                            {value.ul.map((li, index) => (
                                                <li key={index}>{li}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    );
}

export default FeaturesMLBenefit;
