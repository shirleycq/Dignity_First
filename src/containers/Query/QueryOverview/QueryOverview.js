import React, { PureComponent } from 'react';
import { Container, Row, Col, Badge, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';



const links = [
    {
        name: "Lawyer",
        display_name: "LAWYER",
        color: "#45AF98"
    },
    {
        name: "Doctor",
        display_name: "DOCTOR",
        color: "#2B3444"
    },
    {
        name: "Real_Estate_Agent",
        display_name: "REAL ESTATE AGENT",
        color: "#68BBDF"
    },
    {
        name: "Financial_Services",
        display_name: "FINANCIAL SERVICES",
        color: "#f38181"
    },

]

class QueryOverview extends PureComponent {
    state = {
        
    }
    render() {
        const { url } = this.props.match;

        return (
            <div style={{ fontSize: "0.5rem" }}>
                <Container fluid className="p-5">
                    <Row className="mb-5">
                        <p className="h1 ml-3">QUESTIONS</p>
                    </Row>
                    <Row>
                        <Col xs="12" md="12" lg="3" xl="3" className="mb-2">
                            <div className="bg-light border d-flex justify-content-center align-items-center" style={{ height: 150 }}>
                                <span className="h2"><Badge color="secondary">{this.props.all_occupation_queries.length}</Badge> PROFESSIONS</span>
                            </div>
                        </Col>
                        <Col xs="12" md="12" lg="6" xl="6">
                            <Row className="bg-light border mx-0">

                                {this.props.all_occupation_queries.map(item => (
                                    <Col className="pt-2 pb-5" key={item.occupation}>
                                        <h5 style={{ height: 50 }}>{item.occupation}</h5>
                                        <div className="mx-auto bg-white rounded-circle border border-info d-flex flex-column justify-content-center align-items-center" style={{ width: 120, height: 120 }}>
                                            <h1 className="my-0">{item.queries.length}</h1>
                                            <span>QUESTIONS</span>
                                        </div>
                                    </Col>
                                ))}
                            </Row>

                        </Col>
                    </Row>


                    <Row className="mt-5">
                        {links.map(item => (
                            <Col xs="12" md="6" xl="3" className="mb-2" key={item.name}>
                                <Button
                                    block
                                    style={{ height: 150, backgroundColor: item.color }}
                                    className="border-0 shadow"
                                    onClick={() => this.props.history.push(`${url}/${item.name}`)}
                                >
                                    <p className="h6">Query for</p>
                                    <p className="h2">{item.display_name}</p>
                                </Button>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default withRouter(QueryOverview);