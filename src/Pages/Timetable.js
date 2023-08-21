import React, { Component } from 'react';
import axios from 'axios';

class Timetable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timetableData: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8080/api/timetable/max')
      .then((response) => {
        this.setState({ timetableData: response.data });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    return (
      <div className="timetable-container">
        <h1>Timetable</h1>
        <table className="timetable-table">
          <thead>
            <tr>
              <th>Module Name</th>
              <th>Professor</th>
              <th>Classroom</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {this.state.timetableData.map((data) => (
              <tr key={data.id}>
                <td>{data.moduleName}</td>
                <td>{data.professorName}</td>
                <td>{data.classroomCode}</td>
                <td>{data.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Timetable;
