import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AddPostPage from './pages/AddPostPage';
import { AuthProvider } from "./context/AuthContex";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/add" element={<AddPostPage/>}/>
        </Routes>
      </Router>
    </AuthProvider>
  )
}
export default App;