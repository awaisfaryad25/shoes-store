import React from "react";
import "./ShoesCard.css";

const ShoesCard = () => {
  return (
    <div className="cardWrapper">
      <div className="card">
        <div className="cardUpper">
          <br />
          <br />
          <div className="shape-One">
            <img className="object-fit" src="./shapeOne.svg" alt="" />
          </div>
          <div className="dotShape">
            <img src="./Dot Shape.svg" alt="" />
          </div>
          <div className="shoes">
            <img className="object-fit" src="./snk.png" alt="" />
          </div>
        </div>
        <br />
        <div className="cardDown">
          <div className="card_detail">
            <br />
            <div className="about-wrapper">
              <strong className="card_title">SNICKERS</strong><br />
              <span className="card_about">A shoe is an item of footwear intended to protect and comfort the human foot. 
                Here is a lot of collection or variety of shoes for man & women.</span>
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
                  <strong>$99.00</strong>
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
  );
};

export default ShoesCard;
