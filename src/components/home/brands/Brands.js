import React from "react";
import './brand.css'
import img1 from '../../../assets/img/1.jpg'
import { Carousel } from "react-responsive-carousel";

const Brand = () => {
  return (
    <div className="brand-container">
     
      <img src={img1} className="brand-img"/>
      <img src={img1} className="brand-img"/>
      <img src={img1} className="brand-img"/>
      <img src={img1} className="brand-img"/>
      <img src={img1} className="brand-img"/>
     
    </div>
  );
};

export default Brand;
