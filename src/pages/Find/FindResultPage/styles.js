import styled from "styled-components";

export const FindResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ResultHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin: 1.4375rem 1.5rem 2.0625rem;
  position: relative;
`;

export const HeaderTitle = styled.div`
  width: 6.25rem;
  font-family: "SUIT-SemiBold";
  font-size: 1.0625rem;
  line-height: 1;
`;

export const ScrapBox = styled.img`
  cursor: pointer;
`;

export const ResultBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin: 0 1.5rem; */
`;

export const NoImgContainer = styled.div`
  width: calc(100% - 3rem);
  margin: 0 1.5rem;
  min-width: 20.4375rem;
  /* height: 100%; */
  /* max-width: 29rem; */
  border-radius: 1rem;
  background: #dcdee5;
  height: 11.625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: #a0a2a9;
    font-family: "SUIT-Medium";
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 120%;
    margin-top: 0.5625rem;
  }
`;

export const ItemImg = styled.img`
  width: calc(100% - 3.125rem);
  margin: 0 1.5rem;
  min-width: 20.4375rem;
  max-width: 29rem;
  border-radius: 1rem;
`;

export const ItemName = styled.div`
  width: calc(100% - 3rem);
  min-width: 20.4375rem;
  margin: 1rem 0 1.5rem 0.25rem;
  color: #1b1a1f;
  font-family: "SUIT-SemiBold";
  font-size: 1.5rem;
  text-align: left;
  line-height: 1.3;
`;

export const ItemEat = styled.div`
  width: calc(100% - 3rem);
  margin: 0 1.5rem;
  min-width: 20.4375rem;
  height: auto;
  border-radius: 1.25rem;
  background: #f7f6f9;
  margin-bottom: 1.5625rem;
`;

export const ItemEatTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 1.5rem;
  width: 4.125rem;
  height: 1.9375rem;
  font-size: 0.75rem;
  font-family: "SUIT-Medium";
  color: #fff;
  border-radius: 1rem;
  background: #1b1a1f;
`;

export const ItemEatContent = styled.div`
  margin: 0 1.75rem 1.5rem;
  color: #000;
  font-family: "SUIT-Medium";
  font-size: 0.8125rem;
  line-height: 160%;
`;

export const ItemEffect = styled.div`
  width: calc(100% - 3rem);
  margin: 0 1.5rem;
  min-width: 20.4375rem;
  height: auto;
  border-radius: 1.25rem;
  background: #f7f6f9;
  margin-bottom: 1.5625rem;
`;
export const ItemEffectTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 1.5rem;
  width: 7.5625rem;
  height: 1.9375rem;
  font-size: 0.75rem;
  font-family: "SUIT-Medium";
  color: #fff;
  border-radius: 1rem;
  background: #1b1a1f;
`;

export const ItemEffectContent = styled.div`
  margin: 0 1.75rem 1.5rem;
  color: #000;
  font-family: "SUIT-Medium";
  font-size: 0.8125rem;
  line-height: 160%;
`;

export const CantEatWith = styled.div`
  width: calc(100% - 3rem);
  margin: 0 1.5rem;
  min-width: 20.4375rem;
  height: auto;
  border-radius: 1.25rem;
  background: #f7f6f9;
  margin-bottom: 1.5625rem;
`;

export const CantEatWithTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 1.5rem;
  width: 12.6875rem;
  height: 1.9375rem;
  font-size: 0.75rem;
  font-family: "SUIT-SemiBold";
  color: #1b1a1f;
  border-radius: 1rem;
  background: #c4f261;
`;

export const CantEatWithContent = styled.div`
  margin: 0 1.75rem 1.5rem;
  color: #000;
  font-family: "SUIT-Medium";
  font-size: 0.8125rem;
  line-height: 160%;
`;

export const SideEffect = styled.div`
  width: calc(100% - 3rem);
  margin: 0 1.5rem;
  min-width: 20.4375rem;
  height: auto;
  border-radius: 1.25rem;
  background: #f7f6f9;
  margin-bottom: 1.5625rem;
`;

export const SideEffectTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 1.5rem;
  width: 8.625rem;
  height: 1.9375rem;
  font-size: 0.75rem;
  font-family: "SUIT-SemiBold";
  color: #1b1a1f;
  border-radius: 1rem;
  background: #c4f261;
`;

export const SideEffectContent = styled.div`
  margin: 0 1.75rem 1.5rem;
  color: #000;
  font-family: "SUIT-Medium";
  font-size: 0.8125rem;
  line-height: 160%;
`;

export const WhoCant = styled.div`
  width: calc(100% - 3rem);
  margin: 0 1.5rem;
  min-width: 20.4375rem;
  height: auto;
  border-radius: 1.25rem;
  background: #f7f6f9;
  margin-bottom: 5rem;
`;

export const WhoCantTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 1.5rem;
  width: 10.5625rem;
  height: 1.9375rem;
  font-size: 0.75rem;
  font-family: "SUIT-SemiBold";
  color: #1b1a1f;
  border-radius: 1rem;
  background: #c4f261;
`;

export const WhoCantContent = styled.div`
  margin: 0 1.75rem 1.5rem;
  color: #000;
  font-family: "SUIT-Medium";
  font-size: 0.8125rem;
  line-height: 160%;
`;

export const ModalBox = styled.div`
  position: absolute;
  border-radius: 1.25rem;
  border: 0.0625rem solid #f7f6f9;
  background: #fff;
  top: 3.25rem;
  right: 0;
  width: 10.5rem;
  height: auto;
  box-shadow: 1.0625rem 1.25rem 3.75rem -0.25rem rgba(16, 24, 40, 0.03);
`;

export const ScrapItems = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.75rem;
  gap: 0.75rem;
`;

export const ScrapItem = styled.div`
  color: black;
  padding: 0.25rem;
  border-radius: 0.75rem;
  background: var(--Cultured, #f7f6f9);
  text-align: center;
  display: flex;
  align-items: center;
  font-family: "SUIT-Regular";
  font-size: 0.8125rem;
  cursor: pointer;

  img {
    margin-right: 0.75rem;
  }
`;

export const SearchLoadingBox = styled.div`
  width: calc(100% - 3rem);
  width: calc(100% - 3rem);
  min-width: 20.4375rem;
  margin-top: 13.125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
  font-family: "SUIT-SemiBold";
  font-size: 1rem;
  line-height: 1.2%;

  img {
    margin-top: 1.375rem;
  }

  @media (max-width: 25rem) {
    margin: 13.125rem 1.5rem 0;
  }
`;
