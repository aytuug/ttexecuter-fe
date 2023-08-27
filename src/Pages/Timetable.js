import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Timetable = ({ refresh }) => {
  const [timetableData, setTimetableData] = useState([]);

  useEffect(() => {
    fetchTimetableData(); // Bileşen yüklendiğinde verileri al
  }, [refresh]); // refresh değeri değiştiğinde (generate butonuna basıldığında) verileri tekrar al

  const fetchTimetableData = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8080/api/timetable/max'
      );
      setTimetableData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

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
          {timetableData.map((data) => (
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
};

export default Timetable;
