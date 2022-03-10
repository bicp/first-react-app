import { useState, useRef } from "react";

export function Rest() {
  // reactive post variable
  const [post, setPost] = useState({
    title: "myTile 1",
    description: "myDesc 1",
    author: "john doe",
  });
  // ref to hold the data doming from the title input
  const titleRef = useRef();
  // function to handle the title change
  const changeTitle = () => {
    console.log(titleRef.current.value);
    setPost((post) => {
      return {
        ...post,
        title: titleRef.current.value
      }
    })
  };

  const postWithDate = {
    ...post,
    createAt: new Date(),
  };

  const newPost = {
    ...postWithDate,
    author: "elmehdi",
  };

  console.log(post, postWithDate, newPost);

  return (
    <div>
      <input ref={titleRef} placeholder="title" />
      <button onClick={changeTitle}>change title</button>
      <div>
        {JSON.stringify(post)}
      </div>
    </div>
  );
}
