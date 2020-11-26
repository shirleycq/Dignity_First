import React, { PureComponent } from 'react';
import './Application.css'
import { Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import ApplicationDetail from './ApplicationDetail';
import applications_data from './ApplicationData';


class Application extends PureComponent {
    state = {
        applications: applications_data.applications,
        isOpenDetail: false,
        application: null,
    }

    handleToggleDetail = (application) => {
        this.setState(prevState => (
            {
                isOpenDetail: !prevState.isOpenDetail,
                application: application,
            }
        ))
    }

    render() {
        return (
            <div className="container" style={{ background: "#fff", fontSize: "1rem", paddingBottom: 40, paddingTop: 40, marginTop: 20 }}>
                <div className="d-flex">
                    <FontAwesomeIcon icon={faBook} size="lg" style={{ marginTop: 10, marginRight: 10 }} />
                    <h2 style={{ textAlign: "left", marginBottom: 20 }}> Application </h2>
                </div>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>PHONE</th>
                            <th>SUBMITTED BY</th>
                            <th>TIME</th>
                            <th>HAS FORWARDED</th>
                            {/* <th>LICENSE NO</th>
                            <th>STATUS</th>*/}
                            <th>VIEW</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.applications.map((application, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{application.applicant_details.name.first_name}{" "}{application.applicant_details.name.last_name}</td>
                                <td>{application.applicant_details.email}</td>
                                <td>{application.applicant_details.phone}</td>
                                <td>{application.responder_details.occupation}</td>
                                <td>{application.timestamp}</td>
                                {/* <td>{application.licence_details.licence_number}</td> */}
                                {application.isNotified ?
                                    <td style={{ backgroundColor: "#6DC5DD", color: "white" }}>Forwarded</td> :
                                    <td style={{ backgroundColor: "#4A6C82", color: "white" }}>Pending</td>
                                }
                                <td>
                                    <button style={{ background: "#42B8A5", borderRadius: 5, color: "white" }} onClick={() => this.handleToggleDetail(application)}>VIEW</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>

                {this.state.isOpenDetail && <ApplicationDetail
                    isOpen={this.state.isOpenDetail}
                    toggle={this.handleToggleDetail}
                    application={this.state.application}
                />}


            </div>
        );
    }
}

export default Application;

