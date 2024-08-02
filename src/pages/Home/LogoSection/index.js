import { useRecoilState } from "recoil";
import medicineRight from "../../../assets/Home/medicineRight.svg";
import { Logo, Intro, Image, LogoSectionWrapper } from './style'
import { nicknameState } from "../../../recoil/atoms/atom";

const LogoSection = () => {
    const userNickname = useRecoilState(nicknameState)

    

    return (
        <>
                <Logo>PiLLING</Logo>
            <LogoSectionWrapper>
                <Intro>
                    <span className="nickname">{userNickname}</span> 님 오늘도 <br />
                    <span>약, 알고 먹어요!</span>
                </Intro>
                <Image src={medicineRight} />
            </LogoSectionWrapper>
        </>
    )
}
export default LogoSection;