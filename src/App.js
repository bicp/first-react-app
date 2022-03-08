import "./App.css";
import { DisplayPerson } from "./components/DisplayPerson/DisplayPerson";
import { Post } from "./components/Post/Post";
import { useRef, useState } from "react";

const persons = [
  { name: "john", age: 38 },
  { name: "doe", age: 20 },
  { name: "joe", age: 41 },
];

const posts_from_database = [
  { title: "post 1", description: "post 1 description" },
  { title: "post 2", description: "post 2 description" },
  { title: "post 3", description: "post 3 description" },
];

function App() {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const [posts, setPosts] = useState(posts_from_database);
  const [name, setName] = useState("");

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
      {/* persons.map((person) => {
        return <DisplayPerson name={person.name} age={person.age} />;
      }) */}
      <div className="post_container">
        <input ref={titleInputRef} type="text" placeholder="title" />
        <input
          ref={descriptionInputRef}
          type="text"
          placeholder="description"
        />
        <button onClick={handlePostCreation}>Add post</button>
      </div>
      {posts.map((post) => {
        return <Post title={post.title} description={post.description} />;
      })}
    </div>
  );
}

export default App;
