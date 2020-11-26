import React, { PureComponent } from 'react';
import './Application.css'
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

// const applications = [
//     {
//         application_id: "AP00001",
//         appStatus: "Rejected",
//         submitdate: 'ddddate',
//         womenName: "nnnnn",
//         responderType: "Lawyer",
//         awaitreviewRespond: "Review"
//     },

//     {
//         application_id: "AP00002",
//         appStatus: "Approved",
//         submitdate: 'ddddate',
//         womenName: "nnnnn",
//         responderType: "Lawyer",
//         awaitreviewRespond: "Review"
//     },
//     {
//         application_id: "AP00003",
//         appStatus: "Pending",
//         submitdate: 'ddddate',
//         womenName: "nnnnn",
//         responderType: "Lawyer",
//         awaitreviewRespond: "Process"
//     },

//     {
//         application_id: "AP00003",
//         appStatus: "Approved",
//         submitdate: 'ddddate',
//         womenName: "nnnnn",
//         responderType: "Lawyer",
//         awaitreviewRespond: "Review"
//     }
// ]

const applications = [
    {
        "_id": "5e95e71f1c9d4400001b5756",
        "application_id": "AP00001",
        "applicant_details": {
            "name": { "first_name": "Diana", "middle_names": "", "last_name": "Roberts" },
            "email": "diana.roberts@gmail.com",
            "phone": "0444422223",
            "address_details": {
                "street_address": "31 Upper Clifton Terrace",
                "suburb": "Red Hill",
                "state": "Queensland",
                "pincode": "4059"
            }
        },
        "query_answers": [
            {
                "question": "This is a dummy question 1",
                "selected_answer": "Option 1-2",
                "weightage": "0.4"
            },
            {
                "question": "This is a dummy question 2",
                "selected_answer": "Option 2-2",
                "weightage": "0.4"
            },
            {
                "question": "This is a dummy question 3",
                "selected_answer": "Option 3-2",
                "weightage": "0.4"
            }
        ],
        "target_weightage": "1.1",
        "isPotentialApplicant": false,
        "isNotified": true,
        "notified_client_email": "ifn711.homeless@gmail.com",
        "isDraftApplication": false,
        "force_submitted": false,
        "applicant_issues": [
            {
                "issue": "Divorced",
                "notes": "Lost everything as a part of divorce process. No job living on centerlink at the moment with two children."
            }
        ],
        "responder_details": { "occupation": "Lawyer", "responder_id": "ID00001" }
    },
    {
        "_id": "5e95e71f1c9d4400001b5757",
        "application_id": "AP00002",
        "applicant_details": {
            "name": { "first_name": "Michael", "middle_names": "", "last_name": "Jordan" },
            "email": "michael.jordan@gmail.com",
            "phone": "0444422223",
            "address_details": {
                "street_address": "31 Upper Clifton Terrace",
                "suburb": "Red Hill",
                "state": "Queensland",
                "pincode": "4059"
            }
        },
        "query_answers": [
            {
                "question": "This is a dummy question 1",
                "selected_answer": "Option 1-2",
                "weightage": "0.4"
            },
            {
                "question": "This is a dummy question 2",
                "selected_answer": "Option 2-2",
                "weightage": "0.4"
            },
            {
                "question": "This is a dummy question 3",
                "selected_answer": "Option 3-2",
                "weightage": "0.4"
            }
        ],
        "target_weightage": "1.1",
        "isPotentialApplicant": true,
        "isNotified": true,
        "notified_client_email": "ifn711.homeless@gmail.com",
        "isDraftApplication": false,
        "force_submitted": false,
        "applicant_issues": [
            {
                "issue": "Divorced",
                "notes": "Lost everything as a part of divorce process. No job living on centerlink at the moment with two children."
            }
        ],
        "responder_details": { "occupation": "Lawyer", "responder_id": "ID00001" }
    },

]
// currently there is only one applicaion in this "applications" list, create some more


class Application extends PureComponent {

    constructor() {
        super();

        const applications_needed = applications.map(app => (
            // {application_id: app.application_id, appStatus: app.appStatus, submitdate: app.submitdate, womenName: app.womenName ,responderType: app.responderType ,awaitreviewRespond: app.outcome }
            { application_id: app.application_id, appStatus: app.isPotentialApplicant ? "Approved" : "Pending", womenName: app.applicant_details.first_name + " " + app.applicant_details.last_name, responderType: app.responder_details.occupation, awaitreviewRespond: app.isPotentialApplicant ? "Review" : "Process" }
        ))

        this.state = {
            columns: [
                { headerName: "ID", field: "application_id", width: 150, sortable: true, filter: true, },
                {
                    headerName: "STATUS", field: "appStatus", width: 150, sortable: true, filter: true,
                    cellStyle: function (params) {
                        if (params.value === 'Rejected') {
                            return { color: 'white', backgroundColor: '#5392BF' };
                        }
                        if (params.value === 'Approved') {
                            return { color: 'white', backgroundColor: 'skyblue' };
                        }
                        if (params.value === 'Pending') {
                            return { color: 'white', backgroundColor: '#496B84' };
                        }
                    }
                },
                // { headerName: "DATE", field: "submitdate" , width:200, sortable: true, filter:true },
                { headerName: "NAME", field: "womenName", width: 170, sortable: true, filter: true },
                { headerName: "SUBMITTED BY", field: 'responderType', width: 170, sortable: true, filter: true },
                {
                    headerName: "ACTION", field: 'awaitreviewRespond', width: 150, sortable: true, filter: true,
                    cellStyle: function (params) {
                        if (params.value === 'Process') {
                            return { color: 'white', backgroundColor: '#38B9A5' };
                        }
                        if (params.value === 'Review') {
                            return { color: 'white', backgroundColor: '#6A798E' };
                        }
                    }
                }
            ],
            appRowData: applications_needed,
        }
    }

    getappRowData() {
        // this.setState({appRowData:applications})
        const applications_needed = applications.map(app => (
            // {application_id: app.application_id, appStatus: app.appStatus, submitdate: app.submitdate, womenName: app.womenName ,responderType: app.responderType ,awaitreviewRespond: app.outcome }
            { application_id: app.application_id, appStatus: app.isPotentialApplicant ? "Approved" : "Pending", womenName: app.applicant_details.first_name + " " + app.applicant_details.last_name, responderType: app.responder_details.occupation, awaitreviewRespond: app.isPotentialApplicant ? "Review" : "Process" }
        ))
        this.setState({ appRowData: applications_needed })
    }

    getSearchBox(e) {
        e.preventDefault();
        return (
            <div className="applicetion-searchbox">
                searchbox
            </div>
        )
    }

    getApplication() {
        return (
            <div>
                Applciation ITEM
            </div>
        )
    }

    render() {
        // this.getappRowData();
        return (
            <div>
                <div className="application-heading">
                    <img src='/appPageIcon.jpeg' alt="Application" />
                    Application
                </div>

                <div className="application-searchbox">
                    {/* <input type='text' placeholder='SEARCH' onClick={}></input> */}
                    <input type='text' placeholder='SEARCH' onClick={this.getSearchBox.bind(this)}></input>
                </div>

                <div
                    className="ag-theme-balham"
                    style={{
                        height: "489px",
                        width: "1000px"
                    }}>

                    <AgGridReact
                        columnDefs={this.state.columns}
                        rowData={this.state.appRowData}
                        pagination={true}
                        paginationPageSize={15}
                        onRowClicked={this.getApplication.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

export default Application;