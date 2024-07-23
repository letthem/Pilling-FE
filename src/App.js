import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./reset.css";
import Home from "./pages/Home.js";
import NotFoundPage from "./pages/NotFoundPage.js";
import AuthKakao from "./pages/AuthKakao.js";
<<<<<<< HEAD
import Login from "./pages/Login/Login.js";
import Join from "./components/Join.js";
import StartPage from "./pages/StartPage.js";
=======
import Login from "./pages/Login.js";
import Calender from "./pages/Calender/index.js";
>>>>>>> 35dc1c46c7090283484ec85506204654c949b96a

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/join">
            <Route index element={<Join />} />
            <Route path="start" element={<StartPage />} />
          </Route>
          <Route path="/auth/kakao" element={<AuthKakao />} />
          <Route path="/home" element={<Home />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
