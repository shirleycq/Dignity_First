import React,{useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label, Input, FormGroup } from 'reactstrap';
// import { Divider } from 'antd';


export default function AddQueryModal(props) {

    const [modal, setModal] = useState(false);
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

    const toggle = () => {
        setModal(!modal);
        setState({
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
    };

    const handleChange = (event) => {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        })
    }

    return (
        <div>
            <Button color="primary" block className="my-2" onClick={toggle}>Add a Query</Button>
            <Modal isOpen={modal} toggle={toggle} size="lg">
                <ModalHeader toggle={toggle}>Add a Query</ModalHeader>
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
                    <Button color="primary" onClick={() => props.addQuery(state, toggle)}>ADD</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}