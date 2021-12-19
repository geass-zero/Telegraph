import  './Faq.css'
import React from 'react'
import { Col, Container, Row, Button ,Accordion } from 'react-bootstrap';



const Faq = ()=>{
    return(
        <>
        <Container>
                <Row>
                    <Col>
                        <h4 className="title-faq Montserrat">FAQ</h4>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col lg={7}>
                        <div className="accordion-multi Montserrat">
                            <Accordion >
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Frequently Asked Question 1</Accordion.Header>
                                    <Accordion.Body>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Frequently Asked Question 2</Accordion.Header>
                                    <Accordion.Body>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <Accordion >
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Frequently Asked Question 3</Accordion.Header>
                                    <Accordion.Body>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <Accordion >
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Frequently Asked Question 4</Accordion.Header>
                                    <Accordion.Body>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
               
            </Container>
            <br/>
                <br/>
                <br/>
                <br/>
        </>
    )
}
export default Faq;