import React, { PureComponent } from 'react';
import './Registration.css'
import { Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import RegistrationDetail from './RegistrationDetail';

const early_responder_dataset = [
    {
        "_id": "5e93e28d1c9d4400003cf5c1",
        "responder_id": "ID00001",
        "responder_details": {
            "name": { "first_name": "Cynthia", "middle_names": "", "last_name": "Schubert" },
            "email": "cynthia.schubert@gmail.com",
            "mobile": "0433322211",
            "work_phone": "0322211134"
        },
        "occupation": "Lawyer",
        "password": "P@55w0rd",
        "employer_details": {
            "employment_position": "Junior Associate",
            "address": {
                "street_name": "178 Hardgrave Road",
                "suburb": "West End",
                "state": "Queensland",
                "pincode": "4101"
            }
        },
        "licence_details": {
            "licence_number": "LN12345678",
            "path": "./asdf/asdf.pdf",
            "licence_photo": "dummy_photo"
        },
        "isRegistered": true,
        "canAccessPortal": true,
        "submitted_applications": []
    },

    {
        "_id": "5e93e28d1c9d4400003cf5c1",
        "responder_id": "ID00001",
        "responder_details": {
            "name": { "first_name": "Cynthia2", "middle_names": "", "last_name": "Schubert2" },
            "email": "cynthia2.schubert2@gmail.com",
            "mobile": "0433322211",
            "work_phone": "0322211134"
        },
        "occupation": "Lawyer2",
        "password": "P@55w0rd",
        "employer_details": {
            "employment_position": "Junior Associate",
            "address": {
                "street_name": "178 Hardgrave Road",
                "suburb": "West End",
                "state": "Queensland",
                "pincode": "4101"
            }
        },
        "licence_details": {
            "licence_number": "LN87654321",
            "path": "./asdf/asdf.pdf",
            "licence_photo": "dummy_photo"
        },
        "isRegistered": true,
        "canAccessPortal": true,
        "submitted_applications": []
    },

    {
        "_id": "5e93e28d1c9d4400003cf5c2",
        "responder_id": "ID00002",
        "responder_details": {
            "name": { "first_name": "Emma", "middle_names": "", "last_name": "Brown" },
            "email": "Emma.Brown@gmail.com",
            "mobile": "04898989",
            "work_phone": "0322898989"
        },
        "occupation": "Doctor",
        "password": "P@66w0re",
        "employer_details": {
            "employment_position": "Ophthalmologist",
            "address": {
                "street_name": "123 Hilder Road",
                "suburb": "The Gap",
                "state": "Queensland",
                "pincode": "4201"
            }
        },
        "licence_details": {
            "licence_number": "LN9876213",
            "path": "./hhgj/dsq.pdf",
            "licence_photo": "dummy_photo_2"
        },
        "isRegistered": false,
        "canAccessPortal": false,
        "submitted_applications": []
    },
    {
        "_id": "5e93e28d1c9d4400003cf5c3",
        "responder_id": "ID00003",
        "responder_details": {
            "name": { "first_name": "Zoe", "middle_names": "", "last_name": "Jones" },
            "email": "Zoe.Jones@gmail.com",
            "mobile": "04898989",
            "work_phone": "0322898989"
        },
        "occupation": "Real Estate",
        "password": "P@66w0re",
        "employer_details": {
            "employment_position": "Ophthalmologist",
            "address": {
                "street_name": "123 Hilder Road",
                "suburb": "The Gap",
                "state": "Queensland",
                "pincode": "4201"
            }
        },
        "licence_details": {
            "licence_number": "LN77276233",
            "path": "./hhgj/dsq.pdf",
            "licence_photo": "dummy_photo_2"
        },
        "isRegistered": true,
        "canAccessPortal": false,
        "submitted_applications": []
    },
]
class Registration extends PureComponent {
    state = {
        responders: early_responder_dataset,
        isOpenDetail: false,
        responder: null,
    }

    handleToggleDetail = (responder) => {
        this.setState(prevState => (
            {
                isOpenDetail: !prevState.isOpenDetail,
                responder: responder,
            }
        ))
    }

    render() {
        return (
            <div className="container" style={{ background: "#fff", fontSize: "1rem", paddingBottom: 40, paddingTop: 40, marginTop: 20 }}>
                <div className="d-flex">
                    <FontAwesomeIcon icon={faUserFriends} size="lg" style={{ marginTop: 10, marginRight: 10 }} />
                    <h2 style={{ textAlign: "left", marginBottom: 20 }}> Registration</h2>
                </div>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>NAME</th>
                            <th>PROFESSION</th>
                            <th>LICENSE NO</th>
                            <th>EMAIL</th>
                            <th>STATUS</th>
                            <th>VIEW</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.responders.map((responder, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{responder.responder_details.name.first_name}{" "}{responder.responder_details.name.last_name}</td>
                                <td>{responder.occupation}</td>
                                <td>{responder.licence_details.licence_number}</td>
                                <td>{responder.responder_details.email}</td>
                                {responder.isRegistered ?
                                    (
                                        responder.canAccessPortal ?
                                            <td style={{ backgroundColor: "#6DC5DD", color: "white" }}>Approved</td> :
                                            <td style={{ backgroundColor: "#5493BC", color: "white" }}>Declined</td>
                                    ) :
                                    <td style={{ backgroundColor: "#4A6C82", color: "white" }}>Pending</td>}
                                <td>
                                    <button style={{ background: "#42B8A5", borderRadius: 5, color: "white" }} onClick={() => this.handleToggleDetail(responder)}>VIEW</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>

                {this.state.isOpenDetail && <RegistrationDetail
                    isOpen={this.state.isOpenDetail}
                    toggle={this.handleToggleDetail}
                    responder={this.state.responder}
                />}


            </div>
        );
    }
}

export default Registration;

