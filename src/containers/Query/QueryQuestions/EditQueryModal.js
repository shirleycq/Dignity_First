import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label, Input, FormGroup } from 'reactstrap';
// import { Divider } from 'antd';

export default function EditQueryModal(props) {

    const [state, setState] = useState({
        question: "",

        option1_text: "",
        option2_text: "",
        option3_text: "",
        option4_text: "",

        option1_weightage: "",
        option2_weightage: "",
        option3_weightage: "",
        option4_weightage: "",

    })

    useEffect(() => {
        const query = props.query;
        setState({
            question: query.question,

            option1_text: query.options.length >= 1 ? query.options[0].option_text : "",
            option1_weightage: query.options.length >= 1 ? query.options[0].weightage : "",

            option2_text: query.options.length >= 2 ? query.options[1].option_text : "",
            option2_weightage: query.options.length >= 2 ? query.options[1].weightage : "",

            option3_text: query.options.length >= 3 ? query.options[2].option_text : "",
            option3_weightage: query.options.length >= 3 ? query.options[2].weightage : "",

            option4_text: query.options.length >= 4 ? query.options[3].option_text : "",
            option4_weightage: query.options.length >= 4 ? query.options[3].weightage : "",
        })


    }, [props.query])


    const handleChange = (event) => {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        })
    }

    return (
        <div>
            <Modal isOpen={props.modal} toggle={props.toggle} size="lg">
                <ModalHeader toggle={props.toggle}>Edit a Query</ModalHeader>
                <ModalBody>
                    <Form>
                        {/* <Divider>Question</Divider> */}
                        <FormGroup>
                            <Label for="question">Question</Label>
                            <Input type="textarea" name="question" value={state.question} onChange={handleChange} id="question" placeholder="e.g. How is your client?" />
                        </FormGroup>

                        {/* <Divider>Options</Divider> */}
                        <div className="d-flex mb-4">
                            <h6>option1:</h6>
                            <Input type="textarea" name="option1_text" value={state.option1_text} onChange={handleChange} placeholder="e.g. Terrific" className="ml-1" style={{ width: 1200 }} />
                            <Input type="number" name="option1_weightage" value={state.option1_weightage} onChange={handleChange} placeholder="e.g. 0.1" className="ml-5" />
                        </div>
                        <div className="d-flex mb-4">
                            <h6>option2:</h6>
                            <Input type="textarea" name="option2_text" value={state.option2_text} onChange={handleChange} placeholder="e.g. Good " className="ml-1" style={{ width: 1200 }} />
                            <Input type="number" name="option2_weightage" value={state.option2_weightage} onChange={handleChange} placeholder="e.g. 0.2" className="ml-5" />
                        </div>
                        <div className="d-flex mb-4">
                            <h6>option3:</h6>
                            <Input type="textarea" name="option3_text" value={state.option3_text} onChange={handleChange} placeholder="e.g. Bad" className="ml-1" style={{ width: 1200 }} />
                            <Input type="number" name="option3_weightage" value={state.option3_weightage} onChange={handleChange} placeholder="e.g. 0.3" className="ml-5" />
                        </div>
                        <div className="d-flex mb-4">
                            <h6>option4:</h6>
                            <Input type="textarea" name="option4_text" value={state.option4_text} onChange={handleChange} placeholder="e.g. Very Bad" className="ml-1" style={{ width: 1200 }} />
                            <Input type="number" name="option4_weightage" value={state.option4_weightage} onChange={handleChange} placeholder="e.g. 0.4" className="ml-5" />
                        </div>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => props.editQuery(state)}>Edit</Button>{' '}
                    <Button color="secondary" onClick={props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}