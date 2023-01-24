import React, { Component } from 'react';
class Employeroute extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        employees: [
            {
                Name: "RamMohan",
                Company: "Livwell",
                Designation: "Full Stack Developer",
            },
            {
                Name: "Surendar",
                Company: "Livwell",
                Designation: "Android Developer",
            },
            {
                Name: "Sudheer",
                Company: "Livwell",
                Designation: "Backened Developer",
            },
            {
                Name: "Aman",
                Company: "Livwell",
                Designation: "Frontend Developer",
            },

        ]
    }
    render() {
        return (
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Company</th>
                            <th scope="col">Designation</th>
                        </tr>
                    </thead>
                    <tbody >
                        {this.state.employees.map((el, i) => {
                            return (
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td >{el.Name}</td>
                                    <td>{el.Company}</td>
                                    <td>{el.Designation}</td>
                                </tr>
                            )
                        }

                        )}

                    </tbody>
                </table>
            </div>
        );
    }
}

export default Employeroute;