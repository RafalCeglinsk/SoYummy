import styled from "styled-components";
import { MdClear } from "react-icons/md";

const EmptyStyled = styled.p`
  color: var(--color-default-2);
  font-size: 14px;
  font-weight: 500;
  line-height: 10px;
  letter-spacing: -0.2px;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.28px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.36px;
  }
`;

const PictrueContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  padding-top: 100px;
`;

const StyledListContainerIngridient = styled.ul`
  padding: 0px 16px;
  @media (min-width: 768px) {
    padding: 0px 40px;
  }
`;

const StyledIngridientsContainer = styled.div`
  padding-top: 50px;
  padding: 0px 16px;
  @media (min-width: 768px) {
    padding-top: 72px;
    padding: 0px 32px;
  }
  @media (min-width: 1440px) {
    padding: 0px 100px;
  }
`;
const StyledIngridientsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 32px;
  border-radius: 8px;
  color: var(--color-text-7);
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  background-color: var(--color-icons-3);

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.4;
    margin-bottom: 50px;
    padding: 20px;
  }
  @media (min-width: 1440px) {
    padding: 21px 40px;
    line-height: normal;
    letter-spacing: 0.54px;

  }
`;
const StyledIngrsHeadThumb = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 35%;
  @media (min-width: 1440px) {
    width: 40%;
  }
`;
const StyledImageCardThumb = styled.div`
  color: var(--color-text-2);
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
  }
`;
const StyledImage = styled.img`
  height: 60px;
  width: 60px;
  background-color: var(--color-ingredient-bg);
  border-radius: 8px;
  @media (min-width: 768px) {
    height: 97px;
    width: 97px;
  }
`;

const StyledQuantity = styled.p`
  display: flex;
  padding: 3px;
  justify-content: center;
  align-items: center;
  min-width: 37px;
  max-width: 50%;
  height: fit-content;
  margin-bottom: 4px;
  color: #fafafa;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background-color: #8baa36;
  border-radius: 8px;
  @media (min-width: 768px) {
    padding: 10px;
    font-size: 18px;
  }
`;
const StyledFlexQuantity = styled.div`
  display: flex;
  justify-content: space-between;
  width: 35%;

  @media (min-width: 1440px) {
    width: 40%;
  }
`;

const StyledIngridientsItem = styled.li`
  display: flex;
  justify-content: space-between;
  height: 84px;
  margin-bottom: 24px;
  border-bottom: 1px solid #e0e0e0;
  @media (min-width: 768px) {
    margin-bottom: 44px;
    height: 140px;
  }
`;

const StyledCloseIcon = styled(MdClear)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  padding: 3px;
  padding-right: 3%;
  color: var(--text-primary);

  transition: color 250ms var(--cubic-bezier),
    background-color 250ms var(--cubic-bezier);

  &:hover {
    color: var(--background-primary);
    background-color: rgb(139, 170, 54);
  }
`;

export {
  StyledIngridientsHeader,
  StyledIngridientsItem,
  StyledIngrsHeadThumb,
  StyledIngridientsContainer,
  StyledImageCardThumb,
  StyledImage,
  StyledQuantity,
  StyledFlexQuantity,
  StyledListContainerIngridient,
  EmptyStyled,
  PictrueContainerStyled,
  StyledCloseIcon,
};
