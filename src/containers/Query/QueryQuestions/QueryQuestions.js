import React, { PureComponent } from 'react';
import { Table, Button } from 'reactstrap';


import AddQueryModal from './AddQueryModal';
import EditQueryModal from './EditQueryModal';
import { withRouter } from 'react-router-dom';




class QueryQuestions extends PureComponent {
    state = {
        occupation_queries: null,
        open_edit_query_modal: false,
        edit_query: null,
        dropdownOpen: false,
    }

    componentDidMount() {
        const occupation = this.props.match.params.occupation; // '/query/:occupation'

        const occupation_queries = this.props.all_occupation_queries.find(item => item.occupation === occupation);
        this.setState({
            occupation_queries: occupation_queries
        })

    }

    handleAddQuery = (query, closeAddQueryModal) => {
        const ori_options = [
            {
                option_text: query.option1_text,
                weightage: query.option1_weightage,
            },
            {
                option_text: query.option2_text,
                weightage: query.option2_weightage,
            },
            {
                option_text: query.option3_text,
                weightage: query.option3_weightage,
            },
            {
                option_text: query.option4_text,
                weightage: query.option4_weightage,
            },
        ]

        const valid_options = ori_options.filter(item => item.weightage !== ""); //if weight is empty string, we assume that it is an invalid option

        const new_query = {
            question: query.question,
            options: valid_options
        }

        let new_occupation_queries = { ...this.state.occupation_queries };
        new_occupation_queries.queries = new_occupation_queries.queries.concat(new_query);
        this.setState({
            occupation_queries: new_occupation_queries
        })

        closeAddQueryModal(); // close add query modal
    }


    handleEditQuery = (edit_query) => {
        //sent the edit_query along with its "_id" to the server, and then fetch the whole data again
        console.log(edit_query);
        this.setState({ open_edit_query_modal: false });

    }

    handleDeleteQuery = (delete_query) => {
        //sent the edit_query along with its "_id" to the server, and then fetch the whole data again
        alert("delete");
        console.log(delete_query);
    }




    render() {
        return (
            <div className="container" style={{ background: "#fff", fontSize: "1rem", paddingBottom: 20, marginTop: 30 }}>
                <h2>{this.state.occupation_queries && this.state.occupation_queries.occupation} Queries</h2>
                <AddQueryModal addQuery={this.handleAddQuery} />
                <Table bordered>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Questions</th>
                            <th>Response</th>
                            <th>Weighting</th>
                            <th>Edit</th>
                            <th>Del</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.occupation_queries && this.state.occupation_queries.queries.map((query, index) => (
                            <tr key={index}>
                                <th scope="row" style={{ verticalAlign: "middle" }}>{index + 1}</th>
                                <td style={{ verticalAlign: "middle" }}>{query.question}</td>
                                <td>
                                    {query.options.map(option => <p style={{ marginBottom: 0 }} key={Math.random()}>{option.option_text}</p>)}
                                </td>
                                <td>
                                    {query.options.map(option => <p style={{ marginBottom: 0 }} key={Math.random()}>{option.weightage}</p>)}
                                </td>
                                <td style={{ verticalAlign: "middle" }}><Button color="info" onClick={() => {
                                    this.setState({
                                        open_edit_query_modal: true,
                                        edit_query: query,
                                    })
                                }}>Edit</Button></td>
                                <td style={{ verticalAlign: "middle" }}><Button color="danger" onClick={() => this.handleDeleteQuery(query)}>Del</Button></td>
                            </tr>
                        ))}

                    </tbody>
                </Table>



                {this.state.open_edit_query_modal && <EditQueryModal
                    query={this.state.edit_query}
                    modal={this.state.open_edit_query_modal}
                    toggle={() => this.setState({ open_edit_query_modal: !this.state.open_edit_query_modal })}
                    editQuery={this.handleEditQuery}
                />}
            </div>
        );
    }
}




export default withRouter(QueryQuestions);