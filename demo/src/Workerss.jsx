import React from "react";

function Workerss() {
  const empArray = [
    { empName: "Nikhil", empAge: 22, empDesg: "Developer" },
    { empName: "Akhil", empAge: 24, empDesg: "Tester" },
    { empName: "Neha", empAge: 25, empDesg: "Manager" },
    { empName: "Kiran", empAge: 27, empDesg: "Salesexecutive" },
    { empName: "Theertha", empAge: 25, empDesg: "Developer" },
  ];
  return (
    <div className="p-3 m-3 border border-3">
      <h1 className="text-center text-primary">This is workers component</h1>
      <h1 className="text-center text-primary">Employee data</h1>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Designation</th>
          </tr>
        </thead>

        <tbody>
          {empArray.map((emp,index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{emp.empName}</td>
              <td>{emp.empAge}</td>
              <td>{emp.empDesg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Workerss;
