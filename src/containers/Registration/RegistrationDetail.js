import React, { PureComponent } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class RegistrationDetail extends PureComponent {
    state = {}

    handleApproveResgistration=()=>{
        alert("Approved!");
        this.props.toggle();
    }

    render() {
        const { responder } = this.props;

        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} size="lg">
                <ModalHeader toggle={this.props.toggle}>
                    REGISTRATION
                    {
                        responder.isRegistered ?

                            (responder.canAccessPortal ?
                                <span style={{ width: 50, height: 30, backgroundColor: "#6DC5DD", borderRadius: 5, color: "white", marginLeft: 20 }}>APPROVED</span> :
                                <span style={{ width: 50, height: 30, backgroundColor: "#5493BC", borderRadius: 5, color: "white", marginLeft: 20 }}>DECLINED</span>) :

                            <span style={{ width: 50, height: 30, backgroundColor: "#4A6C82", borderRadius: 5, color: "white", marginLeft: 20 }}>PENDING</span>
                    }
                </ModalHeader>
                <ModalBody>

                    <ul style={{ listStyleType: "none" }} >
                        <li> <strong>Name</strong>: {responder.responder_details.name.first_name}{" "}{responder.responder_details.name.last_name}</li>
                        <li> <strong>Occupation</strong>: {responder.occupation}</li>
                        <li> <strong>strongail</strong>: {responder.responder_details.email}</li>
                        <li> <strong>Mobile</strong>: {responder.responder_details.mobile}</li>
                        <li> <strong>Working Address</strong>: {responder.employer_details.address.street_name}</li>
                        <li> <strong>Licence Number</strong>: {responder.licence_details.licence_number}</li>
                    </ul>
                    
                    {responder.isRegistered ?
                        null : <Button color="primary" block onClick={this.handleApproveResgistration}>Approve</Button>
                    }
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default RegistrationDetail;