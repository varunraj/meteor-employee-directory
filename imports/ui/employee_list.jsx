import React from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import {Employees} from '../collections/employees'
import EmployeeDetail from './employee_detail'


const PER_PAGE = 20;

class EmployeeList extends React.Component {
    
    // props.employee will be an array of employees.

    // componentWillMount(){
    //     this.page = 1;
    // }

    page = 1; // page is not a state variable since we dont want to re render 
    // when page count is increased. We need rerended when subscribe list changes.

    handleButtonClick(){
            // update the subscription to get next 20 records.
            Meteor.subscribe('employees', PER_PAGE* (this.page+1));
            this.page += 1;
        
    }

    render() {
        return(
            <div>
                <div className="employee-list">
                    {this.props.employees.map( employee => <EmployeeDetail key={employee._id} employee={employee} />)}
                </div>
                <button onClick={this.handleButtonClick.bind(this)} className="btn btn-primary">
                    Load More .. 
                </button>
            </div>
        )
    }
}

// create a container for employees data and export it
// container will fetch 20 and then when next 20 is fetched, data 
// sent to component is refreshed.

export default withTracker(()=>{

    // setup the subscription
    Meteor.subscribe('employees', PER_PAGE);

    // return an object and will be sent to employeeList and prop.

    return {employees : Employees.find({}).fetch()} // find will give a cursor, fetch will give data.

})(EmployeeList)