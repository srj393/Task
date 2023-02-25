import React from "react";
import './brand.css'
import img1 from '../../../assets/img/img-brand1.jpg'
import img2 from '../../../assets/img/img-brand2.jpg'
import img3 from '../../../assets/img/img-brand.jpg'
import img4 from '../../../assets/img/img-brand4.jpg'
import img5 from '../../../assets/img/img-brand4.jpg'


const Brand = () => {
  return (
    <div className="brand">
     <div className="brand-container">
      <img src={img1} className="brand-img"/>
      <img src={img2} className="brand-img"/>
      <img src={img3} className="brand-img"/>
      <img src={img4} className="brand-img"/>
      <img src={img5} className="brand-img"/>
     </div>
    </div>
  );
};

export default Brand;
