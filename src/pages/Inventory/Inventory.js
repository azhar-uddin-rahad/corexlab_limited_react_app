import React from "react";
import { FaArrowLeft,FaStar} from "react-icons/fa";
import img1 from "../../assets/Rectangle 73.jpg";
import img2 from "../../assets/Rectangle 75.jpg";
import img3 from "../../assets/Rectangle 74.jpg";
import mainImage from "../../assets/Rectangle 28.jpg";
import "./Inventory.css";

const Inventory = () => {
  return (
    <div className="bg-home-background">
      <div className="m-4 bg-white">
        <div>
          <button className="flex items-center gap-2">
            <FaArrowLeft></FaArrowLeft>{" "}
            <h3 className="font-interFont font-medium text-sm">Back</h3>
          </button>
        </div>
        <div className="royalOutdoor">
          <div className="royalLeft">
            <div className="productImage">
              <div class="grid grid-rows-4 grid-flow-col gap-9">
                <div class="col-span-2 ">
                  <picture>
                    <img src={img1} alt="" />
                  </picture>
                </div>
                <div class="col-span-2 ">
                  <picture>
                    <img src={img2} alt="" />
                  </picture>
                </div>
                <div class="col-span-2 ">
                  <picture>
                    <img src={img1} alt="" />
                  </picture>
                </div>
                <div class="col-span-2 ">
                  <picture>
                    <img src={img3} alt="" />
                  </picture>
                </div>

                <div className="row-span-4 w-100% h-100%">
                  <picture>
                    <img src={mainImage} className="w-full h-full" alt="" />
                  </picture>
                </div>
              </div>
            </div>
          </div>
          <div className="royalRight">
            <div className="acdcHeader">
              <div className="acdcleft">
                <h1 className="font-manropeFont font-semibold text-main-color text-2xl">Royal ACDC Outdor</h1>
                <p className="font-interFont font-normal text-sm text-main-color">Gold Leaf Flowers</p>
              </div>
              <div className="acdcRight">
                <div className="rating">
               <span className="text-rating-color text-2xl"> <FaStar></FaStar></span>
               <span className="text-rating-color text-2xl"> <FaStar></FaStar></span>
               <span className="text-rating-color text-2xl"> <FaStar></FaStar></span>
               <span className="text-rating-color text-2xl"> <FaStar></FaStar></span>
               <span className="text-rating-color text-2xl"> <FaStar></FaStar></span>
               
                </div>
                <div className="reviews">
                    <p className="font-interFont font-normal text-sm text-header-top text-center">4.9 (2130 reviews)</p>
                </div>
              </div>
            </div>
            <div className="menus">
                <div className="flex justify-between  mb-2 font-interFont font-normal text-sm">
                    <p>Category: Flowers</p>
                    <p>Strains: India</p>
                    <p>Terpenes: 10</p>
                    <p>Canabinoids: 15</p>

                </div>
                <hr />
                <div className="flex justify-between mt-2 font-interFont font-normal text-sm">
                    <p>Cultivation: Indoor</p>
                    <p>THC: 0.5%</p>
                    <p>Batch No: B54U</p>
                    <p>Brand: Gold</p>
                </div>


            </div>
            <div className="totalStock">
                <div className="card1">

                </div>
                <div className="card2">

                </div>
                <div className="card3">

                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
