import React from "react";
import Logo from "../assets/logo.png";
import Home from "../assets/home.png";
import Bullion from "../assets/bullion.png";
import Transactions from "../assets/transactions.png";
import Network from "../assets/network.png";
import Consumers from "../assets/consumers.png";
import Other from "../assets/other.png";
import Bank from "../assets/bank.png";
import Faq from "../assets/faq.png";
import Customize from "../assets/customize.png";

function Sidebar() {
  const options = [
    { icon: Home, name: "Dashboard" },
    { icon: Bullion, name: "Bullion Operations" },
    { icon: Transactions, name: "Transactions" },
    { icon: Network, name: "Your Network" },
    { icon: Consumers, name: "Consumers" },
    { icon: Other, name: "Other Operations" },
    { icon: Bank, name: "Manage Bank Accounts" },
    { icon: Faq, name: "FAQ" },
    { icon: Customize, name: "Customize Dashboard" },
  ];

  return (
    <div className="flex flex-col h-[100vh] w-[17vw] bg-[#F6FAFC]">
      <div className="flex mt-[20px] ml-[20px] items-center">
        <div className="flex items-center">
          <img src={Logo} alt="" className="w-[29px] h-[29px]" />
        </div>
        <p className="text-[#5D5FEF] text-base font-medium">ZINTLR</p>
      </div>

      <div className="mt-[50px] ml-[15px]">
        {options.map((option, index) => (
          <div
            key={index}
            className={`flex items-center mb-[30px] cursor-pointer ${
              index === 4
                ? "bg-[#4DAEFF] text-white rounded-3xl w-[95%] h-[40px] relative "
                : ""
            }`}
          >
            <div className={`flex ${index === 4 ? "w-full" : ""}`}>
              <div
                className={`flex items-center ${
                  index === 4 && "bg-white rounded-full"
                }`}
              >
                <img src={option.icon} alt="" />
              </div>
              <p
                className={`ml-[14px] ${
                  index === 4 ? "font-medium" : "opacity-50 font-medium"
                }`}
              >
                {option.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
