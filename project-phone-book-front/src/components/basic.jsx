import React, { useState, useContext } from "react";
import "../styles/styles.scss";

const Basic = () => {
  return (
    <div>
      <div id="phoneBook">
        <div className="viewList mx-auto">
          <div className="row w-75 mx-auto">
            <div className="col-3 justify-content-end">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 2H6a2 2 0 0 0-2 2v3H2v2h2v2H2v2h2v2H2v2h2v3a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-8 2.999c1.648 0 3 1.351 3 3A3.012 3.012 0 0 1 13 11c-1.647 0-3-1.353-3-3.001 0-1.649 1.353-3 3-3zM19 18H7v-.75c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5V18z" />
              </svg>
            </div>
            <div className="col-9">
              <h2>Phone Book App</h2>
            </div>
          </div>
          <div className="row w-75 mx-auto">
            <div className="col-6">
              <h2>Contacts</h2>
            </div>
            <div className="col-6">
              <button className="btn btn-primary"> + Add Contact</button>
            </div>
          </div>
          <div className="row w-75 mx-auto">
            <table class="table">
              <tbody>
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6"></div>
                </div>
                <tr>
                  <td>Mark</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basic;
