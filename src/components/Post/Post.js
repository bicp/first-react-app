import "./Post.css";

// the props object is deconstructezd into its attributes (title and description)
export function Post({ title, description }) {
  return (
    <div className="post_container">
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}
