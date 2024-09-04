import React from "react";
import "./ShoesCard.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SizeSelector from "../SizeSelector/SizeSelector";
const ShoesCard = ({ openModal }) => {

  // ---------------------  Get API ------------------
  const [data, setData] = useState([]);
  const getShoes = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log("Data", response.data);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getShoes();
  }, []);
  // ---------------------------- End ----------------------

  // ---------------------------- Pagination ---------------
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const productsPerPage = 6; // Number of products per page
  // Calculate the indices for the products to display
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);
  
  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Calculate total pages
    const totalPages = Math.ceil(data.length / productsPerPage);
    // Handle Previous button
    const handlePrevious = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    // Handle Next button
    const handleNext = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };

  // ----------------------------- Pagination End -----------



  return (
    <div className="container">
      <div className="products">
        <div className="productTitle">
          <h1 className="colorTitle">Branded Shoes</h1>
        </div>
        <div className="btn-row">
          <button className="btn btnAll">All</button>
          <button className="btn btnImp">Imported</button>
          <button className="btn btnLocal">Local</button>
        </div>
        <div className="products_row">
          {currentProducts.map((item) => (
            <div className="products_col" key={item.id}>
              <div className="card">
                <div className="cardUpper">
                  <br />
                  {/* Shoes Image */}
                  <div className="shoes">
                    <img className="object-fit" src={item.image} alt="" />
                  </div>
                  
                  
                </div>
                <div className="cardDown">
                  <div className="card_detail">
                    <br />
                    <div className="about-wrapper">
                      <strong className="card_title">{item.title}</strong>
                      <p className="card_about">{item.description}</p>
                    </div>
                    <div className="size">
                      <strong>Size: 
                      </strong>
                      <select name="size" id="sizeSelector">
                        <option value="size">Size</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                        <option value="">9</option>
                        <option value="">10</option>
                        <option value="">11</option>
                        <option value="">12</option>
                      </select>
                    </div>
                    <div className="color">
                      <strong>Color:</strong>
                      <form action="">
                        <input 
                        className="variant_input"
                          type="radio"
                          value="red"
                          id="red"
                        />
                        <label htmlFor="red" className="variant_label red"></label>

                        <input
                        className="variant_input"
                          type="radio"
                          value="blue"
                          id="blue"
                        />
                        <label htmlFor="blue" className="variant_label blue"></label>

                        <input
                        className="variant_input"
                          type="radio"
                          value="white"
                          id="white"
                        />
                        <label htmlFor="white" className="variant_label white"></label>

                        <input
                        className="variant_input"
                          type="radio"
                          value="yellow"
                          id="yellow"
                        />
                        <label htmlFor="yellow" className="variant_label yellow"></label>

                        <input
                        className="variant_input"
                          type="radio"
                          value="black"
                          id="black"
                        />
                        <label htmlFor="black" className="variant_label black"></label>

                      </form>
                    </div>
                    <div className="card_bottom">
                      <div className="card_left">
                        <div className="card_price">
                          <strong>$ {item.price}</strong>
                        </div>
                        <div className="rating">
                          <input value="5" name="rating" id="star5" type="radio"/>
                          <label for="star5"></label>
                          <input value="4" name="rating" id="star4" type="radio"/>
                          <label for="star4"></label>
                          <input value="3" name="rating" id="star3" type="radio"/>
                          <label for="star3"></label>
                          <input value="2" name="rating" id="star2" type="radio"/>
                          <label for="star2"></label>
                          <input value="1" name="rating" id="star1" type="radio"/>
                          <label for="star1"></label>
                        </div>
                      </div>
                      <div className="cart">
                        <button className="cart_btn">
                          <img className="object-fir" src="./cart.svg" alt="" />
                        </button>
                      </div>
                    </div>
                    <div className="shapeTwo">
                      <img className="object-fit" src="./angel.svg" alt="" />
                    </div>
                  </div>
                </div>

                    {/* vector images */}
                  <div className="shape-One">
                    <img className="object-fit" src="shapeOne.svg" alt="" />
                  </div>
                  <div className="dotShape">
                    <img src="./Dot Shape.svg" alt="" />
                  </div>
              </div>
            </div>
          ))}
        </div>
        <div className="btn-row">
          <button className="btn btnProduct" onClick={openModal}>
            Add Product
          </button>
        </div>
        {/* Pagination */}
        <div className="pagination">

          <button
            onClick={handlePrevious}
            className="pagination-btn"
            disabled={currentPage === 1} // Disable Previous button on the first page
          >
            <img src="./previous.svg" alt="" />
          </button>

          {Array.from({length: Math.ceil(data.length / productsPerPage) }, (_, i) => (
            <button 
            key={i} onClick={()=>paginate(i + 1)}
            className={`pagination-btn btn-num ${currentPage === i + 1 ? "active" : ""}`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={handleNext}
            className="pagination-btn"
            disabled={currentPage === totalPages} // Disable Next button on the last page
          >
            <img src="./next.svg" alt="" />
          </button>
        </div>
        
      </div>

      

    </div>
  );
};

export default ShoesCard;
