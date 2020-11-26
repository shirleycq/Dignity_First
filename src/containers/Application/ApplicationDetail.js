import React, { PureComponent } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Table, Toast, ToastBody, ToastHeader, FormGroup, Label, Input, Spinner } from 'reactstrap';
import axios from 'axios';

class RegistrationDetail extends PureComponent {
    state = {
        forward_email: "",
        forward_email_loading: false,
    }

    handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    toggleForwardEmailLoading = () => {
        this.setState(prevState => ({
            forward_email_loading: !prevState.forward_email_loading
        }))
    }

    handleApproveResgistration = () => {
        alert("Approved!");
        this.props.toggle();
    }

    handleForwardEmail = () => {
        this.toggleForwardEmailLoading();

        const { application } = this.props;

        axios.post("/application/forward", {
            forward_email: this.state.forward_email,
            applicant_details: {
                name: `${application.applicant_details.name.first_name} ${application.applicant_details.name.last_name}`,
                email: application.applicant_details.email,
                phone: application.applicant_details.phone,
                address_details: `${application.applicant_details.address_details.street_address}, ${application.applicant_details.address_details.suburb}, ${application.applicant_details.address_details.state}, ${application.applicant_details.address_details.pincode}`
            },
            query_answers: application.query_answers,
            applicant_issues: application.applicant_issues[0],
            responder_details: application.responder_details
        }).then(res => {
            if (!res.data.error) {
                alert("Application has been forwarded");
            } else {
                alert("Something Wrong! Send again!");
            }

            this.toggleForwardEmailLoading();
        }).catch(err => {

        })
    }

    render() {
        const { application } = this.props;

        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} size="lg">
                <ModalHeader toggle={this.props.toggle}>
                    APPLICATION
                    {
                        application.isNotified ?
                            <span style={{ width: 50, height: 30, backgroundColor: "#6DC5DD", borderRadius: 5, color: "white", marginLeft: 20 }}>Forwarded</span> :
                            <span style={{ width: 50, height: 30, backgroundColor: "#4A6C82", borderRadius: 5, color: "white", marginLeft: 20 }}>Pending</span>
                    }
                </ModalHeader>
                <ModalBody>

                    <ul style={{ listStyleType: "none" }} >
                        <li> <strong>Name</strong>: {application.applicant_details.name.first_name}{" "}{application.applicant_details.name.last_name}</li>
                        <li> <strong>Email</strong>: {application.applicant_details.email}</li>
                        <li> <strong>Phone</strong>: {application.applicant_details.phone}</li>
                        <li> <strong>Address</strong>: {`${application.applicant_details.address_details.street_address}, ${application.applicant_details.address_details.suburb}, ${application.applicant_details.address_details.state}, ${application.applicant_details.address_details.pincode}`}</li>
                        {/* <li> <strong>Issue</strong>: {application.applicant_issues[0].issue}</li> */}
                    </ul>

                    {/* {application.isRegistered ?
                        null : <Button color="primary" block onClick={this.handleApproveResgistration}>Approve</Button>
                    } */}

                    <hr />
                    <Row>
                        <Col sm={7}>
                            <Table striped>
                                <thead>
                                    <tr>
                                        <th>Question</th>
                                        <th>Response</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {application.query_answers.map(query_answer => (
                                        <tr key={query_answer.question}>
                                            <th>{query_answer.question}</th>
                                            <td>{query_answer.selected_answer}</td>
                                        </tr>
                                    ))}


                                </tbody>
                            </Table>
                        </Col>
                        <Col sm={5}>
                            <Toast>
                                <ToastHeader>
                                    <span>Application submitted by</span> {application.responder_details.name}
                                </ToastHeader>
                                <ToastBody>
                                    <p><strong>Profession:</strong> {application.responder_details.occupation}</p>
                                    <p><strong>Issues that woman has:</strong> {application.applicant_issues[0].issue}</p>
                                    <p><strong>Comment:</strong> {application.applicant_issues[0].notes}</p>

                                </ToastBody>
                            </Toast>
                        </Col>
                    </Row>

                    <hr />
                    <h4>Forward Application</h4>
                    <Row>
                        <Col sm={8}>
                            <Input type="email" name="forward_email" placeholder="abc@gmail.com" value={this.state.forward_email} onChange={this.handleInputChange} />
                        </Col>
                        <Col sm={4}>
                            <Row>
                                <Button color="info" onClick={this.handleForwardEmail} className="mr-2">Forward</Button>
                                {this.state.forward_email_loading && <Spinner color="info" />}
                            </Row>
                        </Col>
                    </Row>

                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default RegistrationDetail;