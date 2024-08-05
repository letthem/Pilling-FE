import styled from "styled-components";

export const FindWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FindHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: calc(100%-48px);
  margin: 1.438rem 1.5rem 2.063rem;
  height: 3rem;
`;

export const ArrowDiv = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #f7f6f9;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 0.563rem;
`;

export const ArrowIcon = styled.img`
  background-color: #f7f6f9;
  border-radius: 31.25rem;
`;

export const FindBtn = styled.input`
  z-index: 1;
  display: flex;
  align-items: center;
  width: calc(100% - 3rem);
  height: 3.25rem;
  border-radius: 1.875rem;
  border: 0.0625rem solid #fff;
  background: #f7f6f9;
  text-align: left;
  font-size: 0.875rem;
  font-weight: 400;
  font-family: "SUIT-Regular";
  color: #adadad;
  padding-left: 1.25rem;
  box-shadow:
    inset 0 0.2625rem 0.3125rem -0.375rem #adadad,
    inset -0.3125rem 0 0.3125rem -0.5rem #adadad,
    inset 0.3125rem 0 0.3125rem -0.5rem #adadad;

  img {
    margin-right: 0.75rem;
  }
`;

export const FindBySymptom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const SymptomTitle = styled.div`
  width: calc(100% - 2.25rem);
  margin-left: 2.25rem;
  color: #1b1a1f;
  font-family: "SUIT-SemiBold";
  font-size: 1rem;
  margin: 0 0 2.0313rem 2.25rem;
`;

export const SymptomList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Symptoms = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 2.25rem;

  @media (max-width: 25rem) {
    gap: 1.75rem 1.875rem;
  }

  @media (min-width: 25rem) {
    gap: 1.75rem 3.5rem;
  }
`;

export const Symptom = styled.p`
  min-width: 4.25rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  color: #5f5f5f;
  text-align: center;
  font-size: 0.9375rem;
  cursor: pointer;

  img {
    width: 1rem;
  }

  @media (max-width: 25rem) {
    width: calc((100% - 3.75rem) / 3); /* Adjust for the gap and padding */
  }

  @media (min-width: 25rem) {
    width: calc((100% - 7rem) / 3); /* Adjust for the gap and padding */
  }
`;

export const FindBody = styled.div`
  margin: 0 1.5rem;

  .searchResultNum {
    color: #1b1a1f;
    font-family: "SUIT-Regular";
    font-size: 0.875rem;
    margin-bottom: 1.3125rem;
    display: flex;
    align-items: center;
  }

  span {
    margin-left: 0.5rem;
    color: #c4f261;
    font-family: "GS-SemiBold";
    font-size: 1.0625rem;
  }
`;

export const FindInputLoadingBox = styled.div`
  min-height: 40.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;
  font-family: "SUIT-SemiBold";
  font-size: 1rem;
  line-height: 1.2;
`;

export const FindInputLoading = styled.div`
  margin-bottom: 1.375rem;
`;
