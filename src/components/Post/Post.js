import "./Post.css";

export function Post(props) {
  return (
    <div className="post_container">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}
