import React from "react";
import { FaArrowLeft, FaStar, FaRegDotCircle, FaStore,FaRegCheckCircle} from "react-icons/fa";
import img1 from "../../assets/Rectangle 73.jpg";
import img2 from "../../assets/Rectangle 75.jpg";
import img3 from "../../assets/Rectangle 74.jpg";
import mainImage from "../../assets/Rectangle 28.jpg";
import { RiMoneyDollarCircleLine,RiArrowDownCircleLine,RiAuctionLine} from "react-icons/ri";
import "./Inventory.css";
import Header2 from "../../component/Header2/Header2";
import Main2 from "../../layout/Main2";

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
        <div className="royalOutdoor p-5">
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
            <div className="acdcHeader mb-7">
              <div className="acdcleft">
                <h1 className="font-manropeFont font-semibold text-main-color text-2xl pb-2">
                  Royal ACDC Outdor
                </h1>
                <p className="font-interFont font-normal text-sm text-main-color">
                  Gold Leaf Flowers
                </p>
              </div>
              <div className="acdcRight">
                <div className="rating">
                  <span className="text-rating-color text-2xl">
                    {" "}
                    <FaStar></FaStar>
                  </span>
                  <span className="text-rating-color text-2xl">
                    {" "}
                    <FaStar></FaStar>
                  </span>
                  <span className="text-rating-color text-2xl">
                    {" "}
                    <FaStar></FaStar>
                  </span>
                  <span className="text-rating-color text-2xl">
                    {" "}
                    <FaStar></FaStar>
                  </span>
                  <span className="text-rating-color text-2xl">
                    {" "}
                    <FaStar></FaStar>
                  </span>
                </div>
                <div className="reviews">
                  <p className="font-interFont font-normal text-sm text-header-top text-center">
                    4.9 (2130 reviews)
                  </p>
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
              <div className="card-1 text-center">
              <h2 className="flex justify-center items-center pt-4"><FaRegDotCircle></FaRegDotCircle></h2>
                    <h2>Total Stock</h2>
                    <h1>100Ib</h1>
               
              </div>
              <div className="card-2 p-2">
                    <div className="flex justify-between items-center gap-2 mb-1">
                       <div className="marketPlace mt-2">
                            <h1 className="flex items-center font-interFont font-bold text-sm text-main-color"><FaStore></FaStore> Marketplace</h1>
                        </div>
                        <div className="flex items-center">
                        <label>
                        <input type="checkbox" class="accent-pink-500" checked/>id
                        </label>
                        <label>
                        <input type="checkbox" class="accent-pink-500" checked/>id
                        </label>
                        </div>  
                    </div>
                    <div className="allcated">
                        <div className="allcatedLeft">
                        <div className="allcatedLeft1">
                        <h1><FaRegCheckCircle/></h1>
                        <h2>Allocated</h2>
                         <h3>100Ib</h3>
                         </div>
                         <div className="allcatedLeft2">
                        <h1><RiArrowDownCircleLine/></h1>
                        <h2>Min Qty</h2>
                         <h3>5lb</h3>
                         </div>
                         <div className="allcatedLeft3">
                        <h1><RiMoneyDollarCircleLine/></h1>
                        <h2>Price</h2>
                         <h3>$600/lb</h3>
                         </div>

                        </div>
                        <div className="stocallcatedRight">
                        <div className="radial-progress text-main-color" style={{"--value":70}}><span className="font-interFont font-semibold text-[8px] text-background-home">100lb</span></div>
                        
                        <div className="circleRange flex gap-3 justify-center items-center p-1">
                            <div className="rectangleWhite flex  justify-center items-center gap-1">
                                <div className="bg-header-top p-1 w-1 h-2"></div>
                                <p className="font-interFont font-medium text-[6px]">Stock</p>
                            </div>
                            <div className="rectangleGreen flex  justify-center items-center gap-1">
                                <div className="bg-main-color p-1 w-1"></div>
                                <p className="font-interFont font-medium text-[6px]">Stock</p>
                            </div>
                        </div>
                        </div>
                    </div>

              </div>
              <div className="card-3">
              
                    <div className="flex justify-between items-center gap-2 mb-1">
                       <div className="marketPlace mt-2">
                            <h1 className="flex items-center font-interFont font-bold text-sm text-main-color"><RiAuctionLine></RiAuctionLine> Auction</h1>
                        </div>
                        
                    </div>
                    <div className="allcated">
                        <div className="allcatedLeft">
                        <div className="allcatedLeft1">
                        <h1><FaRegCheckCircle/></h1>
                        <h2>Allocated</h2>
                         <h3>100Ib</h3>
                         </div>
                         <div className="allcatedLeft2">
                        <h1><RiArrowDownCircleLine/></h1>
                        <h2>Min Qty</h2>
                         <h3>5lb</h3>
                         </div>
                        

                        </div>
                        <div className="stocallcatedRight">

                        <div className="circleRange flex gap-3 justify-center items-center p-1">
                            <div className="rectangleWhite flex  justify-center items-center gap-1">
                                <div className="bg-header-top p-1 w-1 h-2"></div>
                                <p className="font-interFont font-medium text-[6px]">Stock</p>
                            </div>
                            <div className="rectangleGreen flex  justify-center items-center gap-1">
                                <div className="bg-main-color p-1 w-1"></div>
                                <p className="font-interFont font-medium text-[6px]">Stock</p>
                            </div>
                        </div>

                        <div className="radial-progress text-main-color" style={{"--value":70}}><span className="font-interFont font-semibold text-[8px] text-background-home">100lb</span></div>
                        
                        
                        </div>
                    </div>

              
              </div>
            </div>
            <div className="mt-7 ">
            <label className="font-interFont font-normal text-sm text-header-top  mr-5">Created 25 July, 2021</label>
            <label className="font-interFont font-normal text-sm text-header-top  ">Posted by<span className="font-bold"> Rasmus Christiansen</span></label>
            </div>
          </div>
        </div>
      </div>
      <div className="m-4 bg-white">
        <Header2></Header2>
       <Main2></Main2>
      </div>

      
    </div>
  );
};

export default Inventory;
