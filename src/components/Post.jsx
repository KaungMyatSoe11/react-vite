import { useEffect, useState } from "react";

const Post = () => {
  const [count, setCount] = useState(0);
  const [reFetch, setReFetch] = useState(false);

  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    console.log("render api fetch ");
    // api fetch
    fetchData();
    //   .then((res) => {
    //     console.log(res);
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, [reFetch]);

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
    </div>
  );
};

export default Post;
