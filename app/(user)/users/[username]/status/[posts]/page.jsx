"use client";

import { use } from "react";

export default function Page(props) {
  const data = use(props.params);
  return (
    <>
      <p>Post: {data.posts}</p>
    </>
  );
}
