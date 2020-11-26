import React, { PureComponent, Fragment } from 'react';
import { Container, Row, Col, Button, Form, Input, FormGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styles from "./LoginPage.module.css";
import * as actions from '../../store/actions';



class LoginPage extends PureComponent {
    state = {}

    handleLogin = () => {
        this.props.onLogin("admin", "admin");
    }

    render() {

        if (this.props.isAuthenticated) {
            return (
                <Redirect to="/" />
            )
        }

        return (
            <Fragment>
                {/* <Header /> */}

                <Container fluid>
                    <Row>
                        <Col lg="7" className={styles.Cover}>
                        </Col>
                        <Col lg="5">

                            <h1 style={{ marginTop: 200, textAlign: "center" }}>WELCOME BACK</h1>


                            <Row>
                                <Col sm="12" md={{ size: 6, offset: 3 }} >

                                    <Form>
                                        <FormGroup>
                                            <Input type="email" name="email" placeholder="Email" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type="password" name="password" placeholder="Password" />
                                        </FormGroup>
                                        <Button block color="primary" onClick={this.handleLogin}>Login</Button>
                                    </Form>
                                </Col>
                            </Row>

                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}


const mapStateToProps = (state) => {
    const authReducer = state.get("authReducer");
    return {
        isAuthenticated: authReducer.get("isAuthenticated"),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (account, password) => dispatch(actions.login(account, password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);