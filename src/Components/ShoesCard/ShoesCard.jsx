import React from "react";
import "./ShoesCard.css";
import { useState, useEffect } from "react";
import axios from "axios";

const ShoesCard = () => {

  const [data, setData] = useState([]);
  const getShoes = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products/");
      console.log("Data", response.data);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getShoes();
  }, []);


  const [topping, setTopping] = useState("red");

  const onOptionChange = (event) => {
    setTopping(event.target.value)
  };

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
                  <div className="shape-One">
                    <img className="object-fit" src="shapeOne.svg" alt="" />
                  </div>
                  <div className="dotShape">
                    <img src="./Dot Shape.svg" alt="" />
                  </div>
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
                      <label>
                        <strong>Size:</strong> <span></span>
                        <select name="selectSize" id="size">
                          <option value="select">Select Your Size</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                        </select>
                      </label>
                    </div>
                    <div className="color">
                      <strong>Color:</strong>
                      <form action="">
                        <input type="radio" name="topping" value="red"  id="red" 
                          checked={topping === "red"}
                          onChange={onOptionChange}/>
                          <label htmlFor="red"></label>

                        <input type="radio"name="topping" value="white" id="white" 
                          checked={topping === "white"}
                          onChange={onOptionChange}/>
                          <label htmlFor="white"></label>

                        <input type="radio"name="topping" value="black" id="black" 
                          checked={topping === "black"}
                          onChange={onOptionChange}/>
                          <label htmlFor="black"></label>

                        <input type="radio"name="topping" value="blue" id="blue"
                          checked={topping === "blue"}
                          onChange={onOptionChange}/>
                          <label htmlFor="blue"></label>
                      </form>
                    </div>
                    <div className="card_bottom">
                      <div className="card_left">
                        <div className="card_price">
                          <strong>$ {item.price}</strong>
                        </div>
                        <div className="card_rating">{item.rate}</div>
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
              </div>
            </div>
          ))}
        </div>
        <div className="btn-row">
          <button className="btn btnProduct">Add Product</button>
        </div>
      </div>
    </div>
  );
};

export default ShoesCard;
