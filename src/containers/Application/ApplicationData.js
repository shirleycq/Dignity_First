export default {
    applications: [
        {
            "_id": "5e95e71f1c9d4400001b5756",
            "application_id": "AP00001",
            "applicant_details": {
                "name": { "first_name": "Diana", "middle_names": "", "last_name": "Roberts" },
                "email": "diana.roberts@gmail.com",
                "phone": "0452758233",
                "address_details": {
                    "street_address": "31 Upper Clifton Terrace",
                    "suburb": "Red Hill",
                    "state": "Queensland",
                    "pincode": "4059"
                }
            },
            "query_answers": [
                {
                    "question": "How is your client?",
                    "selected_answer": "Not Good",
                    "weightage": "0.6"
                },
                {
                    "question": "Is your client having a divorce?",
                    "selected_answer": "yes",
                    "weightage": "1"
                },
                {
                    "question": "What is your client's employment status",
                    "selected_answer": "Have lost her job.",
                    "weightage": "0.8"
                }
            ],
            "target_weightage": "1.1",
            "isPotentialApplicant": true,
            "isNotified": false,
            "notified_client_email": "ifn711.homeless@gmail.com",
            "isDraftApplication": false,
            "force_submitted": false,
            "applicant_issues": [
                {
                    "issue": "Divorce",
                    "notes": "Lost everything as a part of divorce process. No job living on centerlink at the moment with two children."
                }
            ],
            "responder_details": {
                "occupation": "Lawyer",
                "responder_id": "ID00001",
                "name": "Emma Brown",
            },

            // the following does not exist in the database for now
            timestamp: "03/01/2020, 12:15"
        },
        {
            "_id": "5e95e71f1c9d4400001b5757",
            "application_id": "AP00002",
            "applicant_details": {
                "name": { "first_name": "Michael", "middle_names": "", "last_name": "Jordan" },
                "email": "michael.jordan@gmail.com",
                "phone": "0472235793",
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
            "responder_details": {
                "occupation": "Lawyer",
                "responder_id": "ID00002",
                "name": "Cynthia Schubert",
            },

            timestamp: "06/01/2020, 15:15"
        },
    ]
}