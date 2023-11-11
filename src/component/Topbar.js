import React from "react";
import Search from "../assets/search.png";
import MoneyBag from "../assets/moneybag.png";
import Wallet from "../assets/wallet.png";
import Folder from "../assets/folder.png";
import Notification from "../assets/notification.png";
import Flag from "../assets/flag.png";
import Drop from "../assets/drop.png";
import Graph from "../assets/graph.png";
import Increment from "../assets/increment.png";
import Circle from "../assets/circle.png";
import Avatar from "../assets/avatar.png";
import DeepDrop from "../assets/deep-drop.png";
import Person from "../assets/person.png";
import Animation from "../assets/animation.png";
import Pending from "../assets/pending.png";
import Ticket from "../assets/tickets.png";

function Topbar() {
  const options = [MoneyBag, Wallet, Folder, Notification];
  const text = "Consumer > Manage Consumers";
  return (
    <div className="relative flex flex-col">
      <div className="flex flex-col md:flex-row mt-0  md:mt-[5px] md:ml-[40px]">
        <div className="relative flex items-center mb-2 md:mb-0 md:mr-4">
          <input
            type="text"
            placeholder="Search (Eg: Rewards)"
            className="border bg-[#F6FAFC] p-2 rounded-md w-full md:w-64 rounded-2xl outline-none"
          />
          <div className="absolute w-[30px] h-[30px] bg-white top-[32%] right-[5%] rounded-full">
            <img
              src={Search}
              alt=""
              className="absolute top-[15%] left-[15%] h-[20px] w-[20px]"
            />
          </div>
        </div>

        <div className="flex items-center md:ml-[150px]">
          <div className="flex ">
            {options.map((option) => (
              <div className="flex items-center mr-2 md:mr-[15px]">
                <img src={option} alt="" className="w-[32px] h-[32px]" />
              </div>
            ))}
          </div>

          <div className="h-[80px] rounded-md border-solid border-[#C6CEF0] shadow-lg ml-4">
            <div className="flex ">
              <div>
                <p className="text-[#FC6B21] text-[16px] font-medium mt-2 ml-2">
                  Gold
                </p>
                <div className="w-[65px] h-[20px] border border-solid border-[#C6CEF0] flex items-center ml-3 mt-1">
                  <div className="flex items-center ml-1">
                    <img src={Flag} alt="" className="w-[18px] h-[18px]" />
                  </div>
                  <p className="ml-1">IN</p>
                  <div className="flex items-center ml-1">
                    <img src={Drop} alt="" className="" />
                  </div>
                </div>
              </div>
              <div className="ml-2">
                <div className="flex items-center mt-2">
                  <img src={Graph} alt="" />
                </div>
                <p className="text-[#49E45F]">+0.34%</p>
              </div>
              <div className="ml-2">
                <div className="flex mt-2">
                  <p>Buy: ₹7,390.00</p>
                  <div className="flex items-center pl-2 pr-2">
                    <img src={Increment} />
                  </div>
                </div>
                <div className="flex">
                  <p>Buy: ₹7,090.00</p>
                  <div className="flex items-center pl-2 pr-2">
                    <img src={Increment} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F6FAFC] relative flex w-32 rounded-md ml-4">
            <div>
              <img src={Circle} alt="" />
            </div>
            <div className="absolute top-3 left-5">
              <img src={Avatar} alt="" />
            </div>
            <div className="flex items-center ml-2 ">
              <img src={DeepDrop} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-2">
        <div className="rounded-md bg-[#A6CCD3] shadow-lg h-40 w-[350px]  relative ml-[40px]">
          <div className="flex">
            <div className="ml-[15px] pt-[20px] relative">
              <p className="text-[#1FB9FC] text-lg font-bold">{text}</p>
              <p className="text-lg ">Actions</p>
              <div className="bg-[#313945] flex p-2 w-52 mb-0 rounded-md absolute">
                <div className="flex items-center">
                  <img src={Person} alt="" />
                </div>
                <p className="text-white ml-3">Add Consumers</p>
              </div>
            </div>

            <div className="mt-8">
              <img src={Animation} alt="" />
            </div>
          </div>
        </div>

        <div className="flex ">
          <div className="bg-[#DB9F83] w-52 h-40 rounded-md shadow-lg relative mr-3">
            <div className="flex ml-4  mt-5">
              <div className="flex items-center">
                <img src={Pending} alt="" />
              </div>
              <div className="flex">
                <p className="text-2xl font-bold text-[#313945] ml-1">276</p>
                <p className="text-[#313945] text-lg ml-1 mt-2">KYC</p>
              </div>
            </div>
            <div className="ml-4 mt-2">
              <p className="text-[#313945] ">approval pending</p>
            </div>
            <div className="bg-[#313945] ml-4 mt-2 w-20 p-1 rounded-md absolute">
              <p className="text-white">View List</p>
            </div>
          </div>

          <div className="bg-[#f5ecdf] w-52 h-40 rounded-md shadow-lg mr-3">
            <div className="flex ml-4  mt-5">
              <div className="flex items-center">
                <img src={Pending} alt="" />
              </div>
              <div className="flex">
                <p className="text-2xl font-bold text-[#313945] ml-1">182</p>
                <p className="text-[#313945] text-lg ml-1 mt-2">high risk</p>
              </div>
            </div>
            <div className="ml-4 mt-2">
              <p className="text-[#313945] ">consumers</p>
            </div>
            <div className="bg-[#313945] ml-4 mt-2 w-20 p-1 rounded-md">
              <p className="text-white">View List</p>
            </div>
          </div>

          <div className="bg-[#a6ccd3] w-52 h-40 rounded-md shadow-lg">
            <div className="flex ml-4  mt-5">
              <div className="flex items-center">
                <img src={Ticket} alt="" />
              </div>
              <div className="flex">
                <p className="text-2xl font-bold text-[#313945] ml-1">32</p>
                <p className="text-[#313945] text-lg ml-1 mt-2">tickets open</p>
              </div>
            </div>
            <div className="ml-4 mt-2">
              <p className="text-[#313945] ">consumers</p>
            </div>
            <div className="bg-[#313945] ml-4 mt-2 w-20 p-1 rounded-md">
              <p className="text-white">View List</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
