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
          {data.map((item) => (
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
                          type="radio"
                          name="topping"
                          value="red"
                          id="red"
                        />
                        <label htmlFor="red"></label>

                        <input
                          type="radio"
                          name="topping"
                          value="white"
                          id="white"
                        />
                        <label htmlFor="white"></label>

                        <input
                          type="radio"
                          name="topping"
                          value="black"
                          id="black"
                        />
                        <label htmlFor="black"></label>

                        <input
                          type="radio"
                          name="topping"
                          value="blue"
                          id="blue"
                        />
                        <label htmlFor="blue"></label>
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
      </div>

      

    </div>
  );
};

export default ShoesCard;
