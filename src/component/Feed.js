import React, { useEffect, useState } from "react";
import Search from "../assets/search.png";
import Arrow from "../assets/arrow.png";

function Feed() {
  const [query, setQuery] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPageData, setPerPageData] = useState([]);
  const itemsPerPage = 3;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const customers = [
    {
      name: "Raghuvendra Raga",
      asset: "₹35,342",
      revenue: "₹35,342",
      status: "Done",
      facilitator: { name: "Arun Jha", name1: "Anika Singh" },
      zone: "South",
      type: "Business",
      tpa: "9876543210@trucard",
    },
    {
      name: "Abhinav Loyal",
      asset: "₹35,342",
      revenue: "₹35,342",
      status: "Pending",
      facilitator: { name: "Arun Jha", name1: "Anika Singh" },
      zone: "South",
      tpa: "9876543210@trucard",
    },
    {
      name: "Abhishek",
      asset: "₹35,342",
      revenue: "₹35,342",
      status: "Done",
      facilitator: { name: "Arun Jha", name1: "Anika Singh" },
      zone: "South",
      type: "Business",
      tpa: "9876543210@trucard",
    },
    {
      name: "Priya",
      asset: "₹35,342",
      revenue: "₹35,342",
      status: "Pending",
      facilitator: { name: "Arun Jha", name1: "Anika Singh" },
      zone: "South",
      tpa: "9876543210@trucard",
    },
    {
      name: "Arpit",
      asset: "₹35,342",
      revenue: "₹35,342",
      status: "Done",
      facilitator: { name: "Arun Jha", name1: "Anika Singh" },
      zone: "South",
      tpa: "9876543210@trucard",
    },
    {
      name: "Tiwari",
      asset: "₹35,342",
      revenue: "₹35,342",
      status: "Pending",
      facilitator: { name: "Arun Jha", name1: "Anika Singh" },
      zone: "South",
      type: "Business",
      tpa: "9876543210@trucard",
    },
    {
      name: "Sumeet",
      asset: "₹35,342",
      revenue: "₹35,342",
      status: "Done",
      facilitator: { name: "Arun Jha", name1: "Anika Singh" },
      zone: "South",
      type: "Business",
      tpa: "9876543210@trucard",
    },
    {
      name: "Kartikya",
      asset: "₹35,342",
      revenue: "₹35,342",
      status: "Pending",
      facilitator: { name: "Arun Jha", name1: "Anika Singh" },
      zone: "South",
      type: "Business",
      tpa: "9876543210@trucard",
    },
    {
      name: "Abhinav",
      asset: "₹35,342",
      revenue: "₹35,342",
      status: "Done",
      facilitator: { name: "Arun Jha", name1: "Anika Singh" },
      zone: "South",
      type: "Business",
      tpa: "9876543210@trucard",
    },
    {
      name: "Krishna",
      asset: "₹35,342",
      revenue: "₹35,342",
      status: "Pending",
      facilitator: { name: "Arun Jha", name1: "Anika Singh" },
      zone: "South",
      type: "Business",
      tpa: "9876543210@trucard",
    },
    {
      name: "Pulkit",
      asset: "₹35,342",
      revenue: "₹35,342",
      status: "Done",
      facilitator: { name: "Arun Jha", name1: "Anika Singh" },
      zone: "South",
      type: "Business",
      tpa: "9876543210@trucard",
    },
    {
      name: "Komal",
      asset: "₹35,342",
      revenue: "₹35,342",
      status: "Pending",
      facilitator: { name: "Arun Jha", name1: "Anika Singh" },
      zone: "South",
      type: "Business",
      tpa: "9876543210@trucard",
    },
    {
      name: "Nidhi",
      asset: "₹35,342",
      revenue: "₹35,342",
      status: "Done",
      facilitator: { name: "Arun Jha", name1: "Anika Singh" },
      zone: "South",
      type: "Business",
      tpa: "9876543210@trucard",
    },
    {
      name: "Neha",
      asset: "₹35,342",
      revenue: "₹35,342",
      status: "Pending",
      facilitator: { name: "Arun Jha", name1: "Anika Singh" },
      zone: "South",
      type: "Business",
      tpa: "9876543210@trucard",
    },
  ];
  const handleOnchange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setQuery(inputValue);

    const filterData =
      inputValue !== ""
        ? customers.filter((item) =>
            item.name.toLowerCase().includes(inputValue)
          )
        : customers;
    setFilterData(filterData);
  };

  useEffect(() => {
    const limitedDataPerPage = customers?.slice(startIndex, endIndex);
    setPerPageData(limitedDataPerPage);
  }, [startIndex, endIndex, customers]);
  return (
    <div className="ml-[40px] mt-[10px]">
      <div className="relative">
        <h5 className="font-bold">Consumers Overview</h5>
        <input
          type="text"
          placeholder="Search Consumers"
          value={query}
          onChange={(e) => handleOnchange(e)}
          className="border bg-[#FFF] p-2 rounded-md w-64 rounded-2xl outline-none"
        />
        <div className="absolute w-[30px] h-[30px] bg-white top-[45%] left-[21%] rounded-full">
          <img
            src={Search}
            alt=""
            className="absolute top-[15%]  h-[20px] w-[20px]"
          />
        </div>
      </div>

      <div className="h-auto md:max-h-[220px] relative ">
        <table className="mt-[5px] w-full border-collapse mb-[20px]">
          <thead className="bg-[#DDEBFF] top-[5px]">
            <tr>
              <th className="p-[12px] text-left">Consumer Name</th>
              <th className="p-[12px] text-left">Assets</th>
              <th className="p-[12px] text-left">Revenue</th>
              <th className="p-[12px] text-left">KYC Status</th>
              <th className="p-[12px] text-left">Facilitator</th>
              <th className="p-[12px] text-left">Zone</th>
              <th className="p-[12px] text-left">Account Type</th>
              <th className="p-[12px] text-left">TPA</th>
            </tr>
          </thead>

          <tbody className="">
            {filterData.length === 0
              ? perPageData.map((customer, index) => (
                  <tr className={index % 2 !== 0 ? "bg-[#F6FAFC]" : "bg-white"}>
                    <td className="p-[8px] text-[#0153C9]">{customer.name}</td>
                    <td className="p-[8px]">{customer.asset}</td>
                    <td className="p-[8px] text-lg">{customer.revenue}</td>
                    <td
                      className={`p-[8px] rounded ${
                        customer.status === "Done"
                          ? "text-[#27A607] bg-[#EAFFE0]"
                          : "text-[#F44] bg-[#FFE9E9]"
                      }`}
                    >
                      {customer.status}
                    </td>

                    <td className="p-[8px]">
                      <div className="flex">
                        <p className="text-[#313945]">B2B Field Executive</p>
                        <div className="flex items-center ml-2 mr-2 mt-6">
                          <img
                            src={Arrow}
                            alt=""
                            className="w-[15px] h-[7px]"
                          />
                        </div>
                        <p className="text-[#313945]">Associate</p>
                      </div>
                      <div className="flex">
                        <p>{customer.facilitator.name}</p>
                        <p className="ml-24">{customer.facilitator.name1}</p>
                      </div>
                    </td>
                    <td className="p-[8px]">{customer.zone}</td>
                    <td className="p-[8px]">{customer?.type}</td>
                    <td className="p-[8px]">{customer.tpa}</td>
                  </tr>
                ))
              : filterData.length > 0 &&
                filterData.map((customer, index) => (
                  <tr className={index % 2 !== 0 ? "bg-[#F6FAFC]" : "bg-white"}>
                    <td className="p-[8px] text-[#0153C9]">{customer.name}</td>
                    <td className="p-[8px]">{customer.asset}</td>
                    <td className="p-[8px] text-lg">{customer.revenue}</td>
                    <td
                      className={`p-[8px] rounded ${
                        customer.status === "Done"
                          ? "text-[#27A607] bg-[#EAFFE0]"
                          : "text-[#F44] bg-[#FFE9E9]"
                      }`}
                    >
                      {customer.status}
                    </td>

                    <td className="p-[8px]">
                      <div className="flex">
                        <p className="text-[#313945]">B2B Field Executive</p>
                        <div className="flex items-center ml-2 mr-2 mt-6">
                          <img
                            src={Arrow}
                            alt=""
                            className="w-[15px] h-[7px]"
                          />
                        </div>
                        <p className="text-[#313945]">Associate</p>
                      </div>
                      <div className="flex">
                        <p>{customer.facilitator.name}</p>
                        <p className="ml-24">{customer.facilitator.name1}</p>
                      </div>
                    </td>
                    <td className="p-[8px]">{customer.zone}</td>
                    <td className="p-[8px]">{customer?.type}</td>
                    <td className="p-[8px]">{customer.tpa}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center absolute left-[50%] bottom[5%] md:bottom-[1%] border">
        <p
          className="h-[40px] bg-white rounded-md text-[#4200ff] mr-[10px] p-[8px] cursor-pointer border-r"
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
        >
          Prev
        </p>
        <p
          className="h-[40px] bg-white rounded-md text-[#4200ff] mr-[10px] p-[8px] cursor-pointer border-r"
          style={{ cursor: "none", color: "#000" }}
        >
          {currentPage}
        </p>
        <p
          className="h-[40px] bg-white rounded-md text-[#4200ff] mr-[10px] p-[8px] cursor-pointer"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </p>
      </div>
    </div>
  );
}

export default Feed;
