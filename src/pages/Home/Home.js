import React from "react";
import img1 from "../../assets/Rectangle 28.png";
import img2 from "../../assets/Rectangle 30.png";
import img3 from "../../assets/Rectangle 33.png";
import img4 from "../../assets/Rectangle 45.png";
import img5 from "../../assets/Rectangle 46.png";
import img6 from "../../assets/Rectangle 62.png";
import { TbMilitaryAward } from "react-icons/tb";
import { RiCloseFill,RiTimeLine,RiAuctionLine} from "react-icons/ri";
import "./Home.css";
import MultiRangeSlider from "../../component/multiRangeSlider/MultiRangeSlider";


const Home = () => {
  const cardInfos = [
    {
      id: 1,
      img: `${img1}`,
      title: "ACDC #08 Outdoor",
      price: "$600.00/lb",
      awardedlogo: <TbMilitaryAward/>,
      awarded: "Awarded",
      awardedClass:"text-main-color",
      subtitle: "The Green Bull 2 LLC",
      askingPrice: "Asking Price",
    },
    {
      id: 2,
      img: `${img2}`,
      title: "ACDC #08 Outdoor",
      price: "$1100.00/lb",
      awardedlogo: <RiCloseFill/>,
      awarded: "Closed",
      awardedClass:"text-test-color",
      subtitle: "WCW Enterprises, LLC",
      askingPrice: "Asking Price",
    },
    {
      id: 3,
      img: `${img3}`,
      title: "ACDC #08 Outdoor",
      price: "$800.00/lb",
      awardedlogo: <TbMilitaryAward/>,
      awarded: "Awarded",
      awardedClass:"text-main-color",
      subtitle: "Green Country MMJ",
      askingPrice: "Asking Price",
    },
    {
      id: 4,
      img: `${img4}`,
      title: "ACDC #08 Outdoor",
      price: "$650.00/lb",
      awardedlogo: <RiTimeLine/>,
      awarded: "Pending",
      awardedClass:"text-pending-color",
      subtitle: "Gold Leaf Acres, LLC",
      askingPrice: "Asking Price",
    },
    {
      id: 5,
      img: `${img5}`,
      title: "ACDC #08 Outdoor",
      price: "$790.00/lb",
      awardedlogo: <RiTimeLine/>,
      awarded: "Pending",
      awardedClass:"text-pending-color",
      subtitle: "Pong Thao",
      askingPrice: "Asking Price",
    },
    {
      id: 6,
      img: `${img6}`,
      title: "ACDC #08 Outdoor",
      price: "$600.00/lb",
      awardedlogo: <TbMilitaryAward/>,
      awarded: "Awarded",
      awardedClass:"text-main-color",
      subtitle: "Loud Factory, LLC",
      askingPrice: "Asking Price",
    },
  ];

  return (
    <div className="bg-home-background">
      <div className="ml-5 mb-6 pt-5">
        <h1 className="font-interFont font-medium text-2xl">Auction</h1>         
        <p className="font-robotoFont font-normal text-sm">Explore and bid on your desired product based on several filters</p>
         </div>
      <div className="px-5 mb-34">
        <div class="grid grid-rows-3 grid-flow-col gap-4">
          <div class="row-span-6 bg-white ">
            <div className="location">
              <div className="location-heading">
                <h3 className="font-interFont font-medium pb-1">Location</h3>
              </div>

              <div className="pl-5 pr-9">
                <select className="border border-header-top w-full p-2">
                  <option disabled selected>
                    Pick your favorite language
                  </option>
                  <option>Java</option>
                  <option>Go</option>
                  <option>C</option>
                  <option>Python</option>
                </select>
              </div>
            </div>
            <div className="location">
              <div className="location-heading">
                <h3 className="font-interFont font-medium pb-1">Category</h3>
              </div>

              <div className="pl-5 pr-9">
                <div class="flex items-center mb-1">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <label
                    for="link-checkbox"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    All
                  </label>
                </div>
                <div class="flex items-center mb-1">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <label
                    for="link-checkbox"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Flowers
                  </label>
                </div>
                <div class="flex items-center mb-1">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <label
                    for="link-checkbox"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Trims
                  </label>
                </div>
                <div class="flex items-center mb-1">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <label
                    for="link-checkbox"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Biomass
                  </label>
                </div>
                <div class="flex items-center mb-1">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <label
                    for="link-checkbox"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Oils
                  </label>
                </div>
              </div>
            </div>

            <div className="location">
              <div className="location-heading">
                <h3 className="font-interFont font-medium pb-1">Price</h3>
              </div>

              <div className="pl-5 pr-9">
              <MultiRangeSlider
      min={0}
      max={10}
      onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
    />


              </div>
            </div>

            <div className="location">
              <div className="location-heading">
                <h3 className="font-interFont font-medium pb-1">Strain</h3>
              </div>

              <div className="pl-5 pr-9">
              <table class="min-w-full border text-center">
          <thead class="border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 border-r">
              All
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 border-r">
              Indoor
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 border-r">
              Outdoor
              </th>
             
            </tr>
          </thead>
          </table>
              </div>
            </div>
            <div className="location">
              <div className="location-heading">
                <h3 className="font-interFont font-medium pb-1">Cultivation Type</h3>
              </div>

              <div className="pl-5 pr-9">
              <table class="min-w-full border text-center">
          <thead class="border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 border-r">
              Indica
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 border-r">
              Sativa
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 border-r">
              Hybrid
              </th>
             
            </tr>
          </thead>
          </table>
              </div>
            </div>
          </div>
          {cardInfos.map((cardinfo) => (
            <div key={cardinfo.id} class="col-span-2 bg-white pr-5">
              <div className="cardWraper">
                <div className="card-img">
                  <picture>
                    <img src={cardinfo.img} alt="" />
                  </picture>
                </div>
                <div className="card-title">
                  <h3 className="text-sm">
                    {cardinfo.title} <span className="text-header-top">{cardinfo.subtitle}</span>
                  </h3>
                </div>
                <div className="proges-bar">
                  <div class="flex justify-between">
                    <span class="text-base font-medium text-header-top ">
                    THC
                    </span>
                    <span class="text-sm font-medium  text-header-top ">
                      1%
                    </span>
                  </div>
                  <div class="w-full bg-header-top rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      class="bg-main-color h-2.5 rounded-full"
                      style={{ width: "5%" }}
                    ></div>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-base font-medium text-blue-700 text-header-top">
                    CBD
                    </span>
                    <span class="text-sm font-medium text-header-top">
                      13%
                    </span>
                  </div>
                  <div class="w-full bg-header-top rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      class="bg-main-color h-2.5 rounded-full"
                      style={{ width: "20%" }}
                    ></div>
                  </div>
                </div>
                <div className="askingPrice text-center">
                  <span className="text-[10px] font-medium">Asking Price</span>
                  <h3 className="text-sm font-bold">{cardinfo.price}</h3>
                </div>
                <div className="Awarded">
                  <p className={cardinfo.awardedClass}>
                   {cardinfo.awardedlogo}
                  </p>
                  <h5 className={cardinfo.awardedClass}>{cardinfo.awarded}</h5>
                </div>
                <div className="button-section">
                  <button className="flex justify-center items-center rounded-[3px] bg-main-color px-6"><RiAuctionLine></RiAuctionLine> Bid</button>
                  <button className="flex justify-center text-center items-center rounded-[3px] bg-hover-color px-7 mt-2">View</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <nav className="pagination" aria-label="Page navigation example">
          <ul class="inline-flex items-center -space-x-px">
            <li>
              <a
                href="#"
                class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span class="sr-only">Previous</span>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>

            <li>
              <a
                href="#"
                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                3
              </a>
            </li>
           
            <li>
              <a
                href="#"
                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span class="sr-only">Next</span>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Home;
