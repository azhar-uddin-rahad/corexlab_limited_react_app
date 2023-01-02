import React from "react";
import reviewMessage1 from "../../assets/Ellipse(2).png";
import reviewMessage2 from "../../assets/Ellipse.png";
import reviewMessage3 from "../../assets/Group34558.jpg";
import { IoStar, IoStarHalf } from "react-icons/io5";

const Feedback = () => {
  return (
    <div>
      <div className="review flex gap-5  border-t-2 border-header-top pt-10 pb-6 pl-5">
        <div className="review-left">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={reviewMessage3} alt="" />
            </div>
          </div>
        </div>
        <div className="review-right">
          <div className="flex gap-4 items-center">
            <h1>Ken Miles</h1>
            <p>21 Aug,2021</p>
          </div>
          <div className="flex gap-2 items-center">
            <p>4.9</p>
            <div className="rating">
              <p className="text-rating-color P-5">
                <IoStar></IoStar>
              </p>
              <p className="text-rating-color P-5">
                <IoStar></IoStar>
              </p>
              <p className="text-rating-color P-5">
                <IoStar></IoStar>
              </p>
              <p className="text-rating-color P-5">
                <IoStar></IoStar>
              </p>
              <p className="text-rating-color P-5">
                <IoStarHalf></IoStarHalf>
              </p>
            </div>   
          </div>
          <h3 className="font-robotoFont text-[8px] text-background-home">This product is pretty good!</h3>
        </div>
      </div>
      <div className="review flex gap-5  border-t-2 border-header-top pt-10 pb-6 pl-5">
        <div className="review-left">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={reviewMessage1} alt="" />
            </div>
          </div>
        </div>
        <div className="review-right">
          <div className="flex gap-4 items-center">
            <h1>Ken Miles</h1>
            <p>21 Aug,2021</p>
          </div>
          <div className="flex gap-2 items-center">
            <p>4.9</p>
            <div className="rating">
              <p className="text-rating-color P-5">
                <IoStar></IoStar>
              </p>
              <p className="text-rating-color P-5">
                <IoStar></IoStar>
              </p>
              <p className="text-rating-color P-5">
                <IoStar></IoStar>
              </p>
              <p className="text-rating-color P-5">
                <IoStar></IoStar>
              </p>
              <p className="text-rating-color P-5">
                <IoStarHalf></IoStarHalf>
              </p>
            </div>   
          </div>
          <h3 className="font-robotoFont text-[8px] text-background-home">This product is pretty good!</h3>
        </div>
      </div>
      <div className="review flex gap-5 pl-5 border-t-2 border-header-top pt-10 pb-6">
        <div className="review-left">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={reviewMessage2} alt="" />
            </div>
          </div>
        </div>
        <div className="review-right">
          <div className="flex gap-4 items-center">
            <h1>Ken Miles</h1>
            <p>21 Aug,2021</p>
          </div>
          <div className="flex gap-2 items-center">
            <p>4.9</p>
            <div className="rating">
              <p className="text-rating-color P-5">
                <IoStar></IoStar>
              </p>
              <p className="text-rating-color P-5">
                <IoStar></IoStar>
              </p>
              <p className="text-rating-color P-5">
                <IoStar></IoStar>
              </p>
              <p className="text-rating-color P-5">
                <IoStar></IoStar>
              </p>
              <p className="text-rating-color P-5">
                <IoStarHalf></IoStarHalf>
              </p>
            </div>   
          </div>
          <h3 className="font-robotoFont text-[8px] text-background-home">This product is pretty good!</h3>
        </div>
      </div>
      <div className="review flex gap-5 pl-5 border-t-2 border-header-top pt-10 pb-6">
        <div className="review-left">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={reviewMessage3} alt="" />
            </div>
          </div>
        </div>
        <div className="review-right">
          <div className="flex gap-4 items-center">
            <h1>Ken Miles</h1>
            <p>21 Aug,2021</p>
          </div>
          <div className="flex gap-2 items-center">
            <p>4.9</p>
            <div className="rating">
              <p className="text-rating-color P-5">
                <IoStar></IoStar>
              </p>
              <p className="text-rating-color P-5">
                <IoStar></IoStar>
              </p>
              <p className="text-rating-color P-5">
                <IoStar></IoStar>
              </p>
              <p className="text-rating-color P-5">
                <IoStar></IoStar>
              </p>
              <p className="text-rating-color P-5">
                <IoStarHalf></IoStarHalf>
              </p>
            </div>   
          </div>
          <h3 className="font-robotoFont text-[8px] text-background-home">This product is pretty good!</h3>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
