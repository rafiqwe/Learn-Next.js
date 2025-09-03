import React from "react";
import Image from "next/image";
import profilePic from "@/public/genAi1.jpg";
const Page = () => {
  const cardData = {
    name: "Muhammad Rabbi",
    age: 30,
    location: "New York",
    occupation: "Software Engineer",
  };

  return (
    <div className="w-full mx-auto mt-10   grid md:grid-cols-2 lg:grid-cols-3 gap-4 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="border border-blue-600 p-4 mb-4 bg-slate-500 rounded-2xl flex flex-col justify-center items-center w-full "
        >
          <div className="mb-3 relative w-40 rounded-full flex items-center justify-center h-40 bg-gray-200">
            <Image
              src={profilePic}
              fill={true}
              priority={false}
              quality={100}
              alt="profile image"
              placeholder="blur"
              blurDataURL=""
              className="rounded-full object-cover"
            />
          </div>
          <h2 className="text-xl font-bold capitalize">{cardData.name}</h2>
          <p>Age: {cardData.age}</p>
          <p>Location: {cardData.location}</p>
          <p>Occupation: {cardData.occupation}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
