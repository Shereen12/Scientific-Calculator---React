import { useState, useEffect } from "react";

function Clock() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    console.log(time);

    return () => clearInterval(interval);
  }, []);
  
  return (
      <div className="col-start-2  w-100    border-0 rounded-2xl bg-white p-6 shadow-lg place-content-center">
        <div className="m-auto grid grid-cols-5 text-center">
          <div className="border-2 border-stone-50  h-32 m-auto flex items-center justify-center bg-linear-to-b rounded-md from-stone-50 to-gray-300 shadow-lg p-5 ">
            <div className="text-2xl text-blue-950 w-65px">{time.getHours() - 12 < 10 ? `0${time.getHours() - 12}` : time.getHours() - 12}</div>
          </div>
          <div className="m-auto">:</div>
          <div className="border-2 border-stone-50  h-32 m-auto flex items-center justify-center bg-linear-to-b rounded-md from-stone-50 to-gray-300 shadow-lg p-5">
            <div className="text-2xl text-blue-950 w-65px">{time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()}</div>
          </div>
          <div className="m-auto">:</div>
          <div className="border-2 border-stone-50  h-32 m-auto flex items-center justify-center bg-linear-to-b rounded-md from-stone-50 to-gray-300 shadow-lg p-5">
            <div className="text-2xl text-blue-950 w-65px">{time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds()}</div>
          </div>
        </div>
      </div>
  );
}

export default Clock;
