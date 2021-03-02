import React from "react";
import "../../charts.css";
import "./chart.option.css";

const GraphBar = ({ graphData }) => {
  return (
    <>
      <div>
        <table className="charts-css column show-heading hide-data show-labels animation">
          <caption>{graphData.title}</caption>
          <tbody>
            {graphData.datas.map((data, index) => (
              <tr key={index}>
                <th scope="row">{data.label}</th>
                <td style={data.number}> </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GraphBar;
