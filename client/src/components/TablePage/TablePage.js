import React from "react";

import "./TablePage.css";

const TablePage = ({ predict }) => {
    return (
        <div className="div_grid_conatiner">
            <table striped className="table">
                <thead>
                    <tr>
                        <th>AirTemperature</th>
                        <th>FailureType</th>
                        <th>ProcessTemperature</th>
                        <th>ProductID</th>
                        <th>RotationalSpeed</th>
                        <th>Target</th>
                        <th>ToolWear</th>
                        <th>Torque</th>
                        <th>Type</th>
                        <th>UDI</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        predict.map((data) => {
                            return (
                                <tr>
                                    <td>{data.AirTemperature}</td>
                                    <td>{data.FailureType}</td>
                                    <td>{data.ProcessTemperature}</td>
                                    <td>{data.ProductID}</td>
                                    <td>{data.RotationalSpeed}</td>
                                    <td>{data.Target}</td>
                                    <td>{data.ToolWear}</td>
                                    <td>{data.Torque}</td>
                                    <td>{data.Type}</td>
                                    <td>{data.UDI}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TablePage;