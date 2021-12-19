import './NodeOverview.css'
import { Col, Container, Row, Button } from 'react-bootstrap';
import React from 'react';
import handshake from './img/Handshake.png'
import user from './img/User.png'
import lock from './img/Lock.png'

const NodeOverview = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h4 className="title-node Montserrat">Node Overview</h4>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col lg={7}>
                        <div className="what-we-do Montserrat">
                            <h4 className="">How they work?</h4>
                            <img src={handshake} />
                            <div>
                                <h5>Main Title Goes Here</h5>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and</p>
                            </div>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col lg={7}>
                        <div className="what-we-do Montserrat">
                            <h4 className="">How they work?</h4>
                            <img src={lock} />
                            <div>
                                <h5>Main Title Goes Here</h5>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.

                                    <br/><br/>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and</p>
                            </div>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col lg={7}>
                        <div className="what-we-do Montserrat">
                            <h4 className="">How they work?</h4>
                            <img src={user} />
                            <div>
                                <h5>Main Title Goes Here</h5>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.

                                <br/><br/>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and

                                <br/><br/>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                            </div>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    )
}
export default NodeOverview;