import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  let data = useSelector((state) => {
    return state;
  });
  return (
    <div className="container">
      <h3 className="text-primary">Result From Form</h3>

      <table className="table table-bordered w-50">
        <thead>
          <tr>
            <th>Reg.Count</th>
            <th>Recent.Name</th>
            <th>Course</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.details.totalPersons}</td>
            <td>{data.details.person}</td>
            <td>{data.details.course}</td>
            <td>{data.details.mobile}</td>
          </tr>
        </tbody>
      </table>
      <h3 className="text-primary">Candidate Active & Exit List</h3>

      <table className="table table-bordered w-50">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.status.map((tr) => {
            return (
              <tr key={tr.id}>
                <td>{tr.id}</td>
                <td>{tr.name}</td>
                <td>{tr.statusType}</td>
                <td>{tr.date.toString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Result;
