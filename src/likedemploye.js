import React, { Component } from 'react';
class LikedEmploye extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        employees: [
            {
                Name: "RamMohan",
                Company: "Livwell",
                Designation: "Full Stack Developer",
                isLike: false
            },
            {
                Name: "Surendar",
                Company: "Livwell",
                Designation: "Android Developer",
                isLike: false
            },
            {
                Name: "Sudheer",
                Company: "Livwell",
                Designation: "Backened Developer",
                isLike: false
            },
            {
                Name: "Aman",
                Company: "Livwell",
                Designation: "Frontend Developer",
                isLike: false
            },

        ]
    }
    LikedEmployees = (employees) => {
        let filteremployees = this.state.employees.map(el => {
            if (el == employees) {
                el.isLike = true
            }
            return el
        })
        this.setState({ employees: filteremployees })
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
                            <th scope="col">Icon</th>
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
                                    <td><i onClick={() => (this.LikedEmployees(el))} className={el.isLike ? "fa fa-heart" : "fa fa-heart-o"} aria-hidden="true"></i></td>
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

export default LikedEmploye;