import medicineRight from "../../../assets/Home/medicineRight.svg";
import { Logo, Intro, Image, LogoSectionWrapper } from './style'

const LogoSection = () => {
    const nickName = "나는사자"

    return (
        <>
                <Logo>PiLLING</Logo>
            <LogoSectionWrapper>
                <Intro>
                    <span className="nickname">{nickName}</span> 님 오늘도 <br />
                    <span>약, 알고 먹어요!</span>
                </Intro>
                <Image src={medicineRight} />
            </LogoSectionWrapper>
        </>
    )
}
export default LogoSection;