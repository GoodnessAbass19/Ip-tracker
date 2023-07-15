import React, { useState } from "react";
import IPGeolocation from "./Result";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  const [data, setData] = useState(null);
  const [ip, setIp] = useState("");

  const fetchData = async () => {
    const API_KEY = "at_oRv1g5mPuwMEEw5nWovK4pkrQanSQ";
    const IP_ADDRESS = ip;
    const response = await fetch(
      "https://geo.ipify.org/api/v2/country?apiKey=" +
        API_KEY +
        "&ipAddress=" +
        IP_ADDRESS
    );
    const req = await response.json();
    console.log(req);
    setData(req);
  };

  const handleSearch = () => {
    fetchData();
  };

  return (
    <div className="flex flex-col justify-center items-center md:bg-hero bg-mobile bg-cover bg-center bg-no-repeat min-h-[50vh] w-full gap-10">
      <div className="flex justify-center items-center ">
        <div>
          <input
            onChange={(e) => setIp(e.target.value)}
            type="text"
            className="rounded-l-md p-2.5  md:w-[500px] placeholder:italic placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm h-[60px]"
            placeholder="Search for any IP address or domain"
          />
        </div>
        <button
          onClick={handleSearch}
          className="rounded-r-md bg-black hover:bg-gray-600 p-2.5 h-[60px] -ml-3"
        >
          <ChevronRightIcon className="w-8 h-8 text-white" />
        </button>
      </div>
      {data && <IPGeolocation data={data} />}
    </div>
  );
};

export default Hero;
