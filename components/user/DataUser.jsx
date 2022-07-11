import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
const DataUser = ({ data }) => {
  
  
  return (
    <div className="container">
      <h3>Data</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>id</th>

            <th>Date</th>
            <th>Tag</th>
          </tr>
        </thead>
        <tbody>
          {data.map((blg, idx) => (
            <tr key={idx}>
              <td>{blg.id}</td>
              <td>{blg.date}</td>
              <td>{blg.tag}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataUser;
