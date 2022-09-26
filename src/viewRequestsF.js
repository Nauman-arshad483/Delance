import React, { Fragment, useState } from "react";
import Table from "react-bootstrap/Table";
import { TiTick } from "react-icons/ti";
import { GrFormClose } from "react-icons/gr";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { pay_request } from "./features";
import "./viewRequests.css";
const ViewRequests = (requestArray) => {
  return (
    <Fragment>
      <div className="table-container">
        <Table>
          <thead>
            <tr>
              <th>Requests</th>
              <th>Title</th>
              <th>Amount(Eth)</th>
              <th>locked</th>
              <th>Paid</th>
            </tr>
          </thead>
          <tbody>
            {requestArray.requestArray.map((req, index) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{req.title}</td>
                  <td> {Number(req.amount)}</td>
                  <td>{req.locked ? <TiTick /> : <GrFormClose />}</td>
                  <td> {req.paid ? <TiTick /> : <GrFormClose />}</td>
                  <td>
                    <Button
                      onClick={pay_request}
                      className={!req.locked ? "active" : ""}
                    >
                      withdraw
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
};

export default ViewRequests;
