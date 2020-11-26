import React, { PureComponent } from 'react';
import './Query.css'
import { Switch, withRouter, Route } from 'react-router-dom';
import QueryOverview from './QueryOverview/QueryOverview';
import QueryQuestions from './QueryQuestions/QueryQuestions';
import query_data from './QueryData';

class Query extends PureComponent {
    state = {
        all_occupation_queries: query_data.occupation_queries
    }
    render() {
        const { path } = this.props.match; //get previous path -- '/home/query'

        return (
            <div>
                <Switch>
                    <Route exact path={`${path}`}>
                        <QueryOverview
                            all_occupation_queries={this.state.all_occupation_queries}
                        />
                    </Route>

                    <Route path={`${path}/:occupation`}>
                        <QueryQuestions
                            all_occupation_queries={this.state.all_occupation_queries}
                        />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default withRouter(Query);