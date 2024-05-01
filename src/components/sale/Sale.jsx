import React from "react";
import { SALE } from "../../static/index";
import { FaRegHeart, FaCartPlus } from "react-icons/fa";
const Sale = () => {
  let card = SALE?.map((el) => (
    <div key={el.id} className="card">
      <img src={el.img} alt="" />
      <h2>{el.title}</h2>
      <h3>
        {el.price} <span>{el.oldPrice}</span>
      </h3>
      <div className="star text-start">
        <img src={el.star} alt="" />
        <img src={el.star} alt="" />
        <img src={el.star} alt="" />
        <img src={el.star} alt="" />
        <img src={el.star} alt="" />
        <p>{el.num}</p>
      </div>
      <div className="sales">{el.sale}</div>
      <button className="btn2">
        <FaRegHeart />
      </button>
      <button className="btn3">
        <FaCartPlus />
      </button>
    </div>
  ));
  return (
    <div className="kontainer sale">
      <div className="lines">
        <div className="line"></div>
        <span>Today’s</span>
      </div>
      <h1>Flash Sales</h1>
      <div className="cards">{card}</div>
      <button>View All Products</button>
      <hr />
    </div>
  );
};

export default Sale;
