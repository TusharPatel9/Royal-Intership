import React from "react";

function Table({ data, columns }) {
  return (
    <div>
      <table className="table table-primary">
        <thead>
          <tr>
            {columns.map((col) => (
              <th>{col.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            return (
              <tr key={row.id}>
                {columns.map((col, index) => (
                  <td key={index}>{row[col]}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
