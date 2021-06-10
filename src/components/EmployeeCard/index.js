import React, { Component } from "react";
import "./style.css";
import API from '../../utils/API';

class EmployeeCard extends Component {
    state = {
        apiResults: [
            // API.search
        ]
    }

    componentDidMount() {

        API.search()
            .then((res) =>
                this.setState({
                    apiResults: res.data.results
                })
            )
            .catch((err) => console.log(err));


        // console.log('state: ' + this.state);
    }

    render() {
        // console.log("!!!!! these are the results: " + this.state.apiResults.search);
        // console.log("state: " + this.state);

        let employeeCards = [];

        for (let i = 0; i < this.state.apiResults.length; i++) {

            const result = this.state.apiResults[i];
            
            console.log(this.state.apiResults[1])

            employeeCards.push(
                <div className="card">
                    <h1>{result.name.first + ' ' + result.name.last}</h1>
                    <div className="img-container">
                        <img alt={result.name.first + ' ' + result.name.laste} src={result.picture.large} />
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <strong>Email:</strong> {result.email}
                            </li>
                            <li>
                                <strong>Phone:</strong> {result.email}
                            </li>
                        </ul>
                    </div>
                </div>
            )
        }

        return (
            // console.log("employeeCards: " + employeeCards),
            employeeCards
        );
    }
}

export default EmployeeCard;
