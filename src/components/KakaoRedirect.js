import { useNavigate } from "react-router";
import { useEffect } from "react";

export const KakaoRedirect = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);
  const headers = {
    "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
  };
};
