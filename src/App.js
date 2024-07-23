import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./reset.css";
import Home from "./pages/Home.js";
import NotFoundPage from "./pages/NotFoundPage.js";
import AuthKakao from "./pages/AuthKakao.js";
import Login from "./pages/Login/Login.js";
import Join from "./components/Join.js";
import StartPage from "./pages/StartPage.js";

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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
