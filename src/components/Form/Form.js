import { useState } from "react";

export function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(title, description);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={handleTitleChange} />
      <input value={description} onChange={handleDescriptionChange} />
      <button disabled={!(title && description)} type="submit">
        submit
      </button>
    </form>
  );
}
