import "./App.css";
import { Post } from "./components/Post/Post";
import { useRef, useState } from "react";
import { Form } from "./components/Form/Form";

const posts_from_database = [
  { title: "post 1", description: "post 1 description" },
  { title: "post 2", description: "post 2 description" },
  { title: "post 3", description: "post 3 description" },
];

/* let name = "";
const condition = false;

if (condition) {
  name = "john";
} else {
  name = "doe";
} */

/* const condition = true; */

// ternary operation
// (condition ?) this is like an if (condition)
// ("john") this is the first bloc of an if statement
// ("doe") is the else block of an if statement
/* const name = condition ? "john" : "doe";

console.log(name); */

function App() {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const [posts, setPosts] = useState(posts_from_database);

  const handlePostCreation = () => {
    setPosts((posts) => {
      return [
        ...posts,
        {
          title: titleInputRef.current.value,
          description: descriptionInputRef.current.value,
        },
      ];
    });
  };

  return (
    <div>
      {/* form for adding a new post */}
      <div className="post_container">
        <input ref={titleInputRef} type="text" placeholder="title" />
        <input
          ref={descriptionInputRef}
          type="text"
          placeholder="description"
        />
        <button onClick={handlePostCreation}>Add post</button>
      </div>
      {/* list of posts */}
      {posts.map((post) => {
        return <Post title={post.title} description={post.description} />;
      })}
      <Form />
    </div>
  );
}

export default App;
