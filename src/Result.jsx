const IPGeolocation = ({ data }) => {
  return (
    <div className="max-w-screen-xl w-full flex md:flex-row  flex-col bg-white rounded-lg text-black md:divide-x-2 p-3 gap-10">
      <div className="px-5 basis-1/4">
        <h4 className="text-base text-black/30 font-semibold uppercase">
          Ip address
        </h4>
        <h2 className="text-xl font-semibold">{data.ip}</h2>
      </div>
      <div className="px-5 basis-1/4">
        <h4 className="text-base text-black/30 font-semibold uppercase">
          location
        </h4>
        <h2 className="text-xl font-semibold">
          {data.location.region}, {data.location.country}
        </h2>
      </div>
      <div className="px-5 basis-1/4">
        <h4 className="text-base text-black/30 font-semibold uppercase">
          timezone
        </h4>
        <h2 className="text-xl font-semibold">{data.location.timezone}</h2>
      </div>
      <div className="px-5 basis-1/4">
        <h4 className="text-base text-black/30 font-semibold uppercase">isp</h4>
        <h2 className="text-xl font-semibold">{data.isp}</h2>
      </div>
    </div>
  );
};

export default IPGeolocation;
