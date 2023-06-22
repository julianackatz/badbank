import React from "react";
import bank from "./bank_icon.png";
import "./page.css";

function Home() {
  return (
    <>
      <div className="home-card">
        <div className="row">
          <div className="col-sm 12 col-md-4">
            <img src={bank} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-sm 12 col-md-6">
            <div className="card home-card-inner">
              <h5 className="card-title">Welcome to the Bad Bank</h5>
              <p className="card-text">For all your banking needs</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
