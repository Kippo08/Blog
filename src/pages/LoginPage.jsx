import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContex";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const zaloguj = e => {
    e.preventDefault();
    const success = login(username, password);
    if (success) navigate("/add");
    else alert("Błędny login lub hasło");
  };

  return (
    <form onSubmit={zaloguj} className="login-form">
      <h2>Logowanie</h2>
      <input
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Podaj login"
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Podaj hasło"
      />
      <button type="submit">Zaloguj</button>
    </form>
  );
}

export default LoginPage;
