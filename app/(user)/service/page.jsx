import Button from "@/Components/Button";
import React from "react";
export const metadata = {
  title: "service Page ",
  description: "This is service page and check the service ",
  keywords: ["serivce", "service page", "service check"],
  authors: [
    { name: "Muhammad Rabbi" },
    { name: "Muhammad rabbi", url: "muhammadrabbi-dev.in.com" },
  ],
};

const page = () => {
  return (
    <div>
      <h1>Our Services</h1>
      <p>We offer a variety of services to help you succeed.</p>
      <Button />
    </div>
  );
};

export default page;
