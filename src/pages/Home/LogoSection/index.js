import { useRecoilState } from "recoil";
import medicineRight from "../../../assets/Home/medicineRight.svg";
import { Intro, Image, LogoSectionWrapper, LogoImg } from "./style";
import { nicknameState } from "../../../recoil/atoms/atom";
import logoImg from "../../../assets/login/Logo.svg";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../../api/api";

const LogoSection = () => {
  const userNickname = useRecoilState(nicknameState);
  const [myNmae, setMyName] = useState("");

  const getMyName = async () => {
    try {
      const res = await axiosInstance.get("/users/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log(res.data.nickname);
      setMyName(res.data.nickname);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getMyName();
  }, [myNmae]);

  return (
    <>
      <LogoImg src={logoImg} />
      <LogoSectionWrapper>
        <Intro>
          <p>
            <span className="nickname">{myNmae}</span> 님 오늘도
          </p>
          <p>약, 알고 먹어요!</p>
        </Intro>
        <Image src={medicineRight} />
      </LogoSectionWrapper>
    </>
  );
};
export default LogoSection;
