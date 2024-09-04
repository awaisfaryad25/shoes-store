import React, { useState } from "react";
import "./ManModal.css";
import axios from "axios";

const ManModal = ({ isOpen, closeModal }) => {
  // Return null if modal is not open
  if (!isOpen) return null;

  // Combined state for form data
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    description: '',
    price: '',
    img: null
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle image input separately
  const handleImageChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      img: e.target.files[0],
    }));
  };

  // Handle form submission
  const postData = async (event) => {
    event.preventDefault();
    try {
      // Log form data to console
      console.log("FormData" ,formData);
      const response = await axios.post("https://fakestoreapi.com/products", formData);
      console.log("api response",response.data); // Use response data if needed
      closeModal();
      // getposts();

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="manModal">
      <div className="container">
        <div className="close">
          <button className="btn-close" onClick={closeModal}>
            <img className="close-icn" src="./cross.svg" alt="Close icon" />
          </button>
        </div>
        <form onSubmit={postData}>
          <h3>Add New Product</h3>
          <div className="inputGroup">
            <label className="fromLabel" htmlFor="id"><b>ID:</b></label>
            <input
              className="formInput"
              type="number"
              name="id"
              placeholder="Enter ID"
              value={formData.id}
              onChange={handleChange}
            />
          </div>
          <div className="inputGroup">
            <label className="fromLabel" htmlFor="title"><b>Title:</b></label>
            <input
              className="formInput"
              type="text"
              name="title"
              placeholder="Enter Title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="inputGroup">
            <label className="fromLabel" htmlFor="description"><b>Description:</b></label>
            <input
              className="formInput"
              type="text"
              name="description"
              placeholder="Enter Description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className="inputGroup">
            <label className="fromLabel" htmlFor="price"><b>Price:</b></label>
            <input
              className="formInput"
              type="text"
              name="price"
              placeholder="Enter Price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <div className="inputGroup">
            <label className="fromLabel" htmlFor="img"><b>Image:</b></label>
            <input
              type="file"
              name="img"
              onChange={handleImageChange}
            />
          </div>
          <div className="submit">
            <button className="btn btn-Sub" type="submit">Submit</button>
            <button
              className="btn btn-canc"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                closeModal();
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManModal;
