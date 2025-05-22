import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddPostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    const newPost = {
      title,
      content,
      comments: [],
    };

    await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    });

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="add-post-form">
      <h2>Dodaj nowy post</h2>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Tytuł posta"
      />
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Treść posta"
      />
      <button type="submit">Dodaj post</button>
    </form>
  );
}

export default AddPostPage;
