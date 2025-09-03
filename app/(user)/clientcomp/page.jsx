"use client";

import { useEffect, useState } from "react";

const Clientcomp = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [Data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1 className="text-6xl font-bold text-center ">Client Components</h1>
      <div className="w-full flex flex-col items-center justify-center mt-5 ">
        <p className="text-2xl font-semibold text-green-200">This is a client component</p>
        <p className="text-2xl font-semibold text-green-200">It can be rendered on the client side</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {Data.map((items, idx) => (
          <div key={idx} className="border rounded-2xl p-4">
            <h2 className="font-bold"> Title: {items.title}</h2>
            <p className="mt-3">
              <b>Body:</b> {items.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clientcomp;
