import React from "react";
import "./ShoesCard.css";
import { useState, useEffect } from "react";
import axios from "axios";


const ShoesCard = () => {

  const [data, setData] = useState([]);

  const getShoes = async () => {
    try{
      const response = await axios.get('https://fakestoreapi.com/products/');
      console.log('Data', response.data);
      setData(response.data);
    }
    catch(err){
      console.log(err);
    }
  };

  useEffect(() => {
    getShoes();
  },[]);

  return (
    <div className="container">
      <div className="products">
        <div className="productTitle">
          <h1 className="colorTitle">Branded Shirts</h1>
        </div>
        <div className="products_row">
          {data.map((item) => (
            <div className="products_col" key={item.id}>
            <div className="card">
              <div className="cardUpper"><br />
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
                    <span className="card_about">
                      A shoe is an item to protect and
                      comfort the human foot.
                    </span>
                  </div>
                  <div className="size">
                    <strong>Size:</strong>
                  </div>
                  <div className="color">
                    <strong>Color:</strong>
                  </div>
                  <div className="card_bottom">
                    <div className="card_left">
                      <div className="card_price">
                        <strong>$ {item.price}</strong>
                      </div>
                      <div className="card_rating"></div>
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
      </div>
    </div>
  );
};

export default ShoesCard;
