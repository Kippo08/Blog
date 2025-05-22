import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <>
      <header className="header">
        <h1>Blog</h1>
        <Link to="/login">Zaloguj się</Link>
      </header>

      <div className="container">
        <ul>
          {posts.map(post => (
            <li className="post" key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <h4>Komentarze:</h4>
              <div class="comm">
                <ul className="comments">
                  {post.comments?.map((c, idc) => (
                    <li key={idc}>{c}</li>
                  ))}
                </ul>
              </div>
              
              <CommentForm postId={post.id} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function CommentForm({ postId }) {
  const [comment, setComment] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    const res = await fetch(`http://localhost:3000/posts/${postId}`);
    const post = await res.json();

    const updatePost = {
      ...post,
      comments: [...(post.comments || []), comment],
    };

    await fetch(`http://localhost:3000/posts/${postId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatePost),
    });

    setComment("");
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <input
        value={comment}
        onChange={e => setComment(e.target.value)}
        placeholder="Dodaj komentarz"
      />
      <button type="submit">Dodaj komentarz</button>
    </form>
  );
}

export default HomePage;
