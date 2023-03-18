import React from "react";

export default function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-1 grid-rows-7 md:grid-cols-4 md:grid-rows-3 gap-4">
        <div className="bg-blue-100 ">1</div>
        <div className="bg-blue-100">2</div>
        <div className="bg-blue-100">3</div>
        <div className="bg-blue-100">4</div>
        <div className="bg-blue-100 md:col-span-3 ">5</div>
        <div className="bg-blue-100 md:col-span-1 md:row-span-2">6</div>
        <div className="bg-blue-100 md:col-span-3">7</div>
      </div>
    </>
  );
}
