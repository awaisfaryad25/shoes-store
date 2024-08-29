import React from "react";
import { useState, useEffect } from "react";
import "./ManModal.css";

const ManModal = ({ isOpen, closeModal }) => {
  if(!isOpen) return null;
  return (
    <div  className="manModal">
      <div className="container">
        <div className="close">
          <button className=" btn-close" onClick={closeModal}>
            <img className="close-icn" src="./cross.svg" alt="" />
          </button>
        </div>
        <form action="">
          <h3>Add New Product</h3>
          <div className="inputGroup">
            <label className="fromLabel" htmlFor=""><b>ID:</b></label>
            <input className="formInput" type="number"  placeholder="Enter ID"/>
          </div>
          <div className="inputGroup">
            <label className="fromLabel" htmlFor=""><b>Title:</b></label>
            <input className="formInput" type="text" placeholder="Enter Title" />
          </div>
          <div className="inputGroup">
            <label className="fromLabel" htmlFor=""><b>Description:</b></label>
            <input className="formInput" type="text" placeholder="Enter Description"/>
          </div>
          <div className="inputGroup">
            <label className="fromLabel" htmlFor=""> <b>Price:</b> </label>
            <input className="formInput" type="text" placeholder="Enter Price"/>
          </div>
          <div className="inputGroup">
            <label className="fromLabel" htmlFor=""> <b> Image: </b> </label>
            <input type="file" />
          </div>

          <div className="submit">
            <button className="btn btn-Sub">Submit</button>
            <button className="btn btn-canc" onClick={closeModal}> Cancle</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManModal;
