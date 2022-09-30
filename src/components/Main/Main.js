import React from "react";
import MainImg from "../files/main.png";
import "./Main.css";


const Main = () => {
  return (
    <div className="main">
      <div className="title-container">
        <h1>
          Next Generation
        <br/>
          Digital Banking
        </h1>

        <p>
         
          Take your financial life online. Your Easybank account <br/>
          will be a one-stop-shop for spending, saving.<br/>
          budgeting, investing, and much more.
        </p>

        <div style={{margin: '30px 0px'}}>  <button className='gradient'>Request Invite</button></div>
      </div>
    
      <img className="image" src={MainImg} alt="main" />

      
    </div>
  );
};

export default Main;
