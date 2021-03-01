import React from "react";
import "../../charts.css";
import "./chart.option.css";

const style = {
  fourty: {
    "--size": 0.4,
  },
  sixty: {
    "--size": 0.6,
  },
  eighty: {
    "--size": 0.8,
  },
  ninety: {
    "--size": 0.9,
  },
  one: {
    "--size": 1.0,
  },
};

const GraphBar = () => {
  return (
    <>
      <div>
        <table className="charts-css bar show-heading hide-data show-labels">
          <caption> Front End Developer Salary </caption>
          <tbody>
            <tr>
              <td style={style.fourty}> </td>
            </tr>
            <tr>
              <td style={style.sixty}></td>
            </tr>
            <tr>
              <td style={style.eighty}></td>
            </tr>
            <tr>
              <td style={style.ninety}></td>
            </tr>
            <tr>
              <td style={style.one}></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GraphBar;
