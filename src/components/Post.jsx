/* eslint-disable react/prop-types */
import { memo, useEffect, useState } from "react";

const Post = ({ PCount }) => {
  const [count, setCount] = useState(0);
  const [reFetch, setReFetch] = useState(false);

  console.log("render post component");

  const fetchData = async (controller) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      signal: controller.signal,
    });
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    console.log("render api fetch ");
    const controller = new AbortController();
    // api fetch
    fetchData(controller);

    return () => {
      controller.abort();
    };
  });

  const handleScroll = () => {
    console.log("scroll");
  };
  const handleResize = () => {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    //
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  console.log("render component");

  return (
    <div>
      Post
      <button onClick={() => setCount(count + 1)}>Count</button>
      <button onClick={() => setReFetch(true)}>Reload</button>
      <br />
      {PCount}
    </div>
  );
};

export default memo(Post);
