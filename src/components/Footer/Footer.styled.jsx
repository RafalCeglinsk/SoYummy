import styled from "styled-components";
import spinachFooterLeft from "../../images/Footer/spinach-footer-left.jpg";
import spinachFooterRight from "../../images/Footer/spinach-footer-right.jpg";

export const FooterContent = styled.footer`
  background-color: var(--color-bg-footer);
  padding: 28px 32px 18px 32px;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: var(--color-default-1);

  @media (min-width: 768px) {
    padding-top: 50px;
    padding-bottom: 24px;
  }
`;

export const FooterTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 40px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 72px 175px;
    max-width: 1217px;
  }

  @media (min-width: 1440px) {
    display: flex;
    width: 100%;
    max-width: 1440px;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: space-around;
    gap: 0px;
  }
`;
export const LogoWrapper = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  @media (min-width: 768px) {
    gap: 12px;
    font-size: 28px;
  }
`;
export const FooterText = styled.ul`
  display: none;

  @media (min-width: 768px) {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: -0.28px;
  }

  @media (min-width: 1440px) {
    max-width: 400px;
    font-size: 14px;
    line-height: 24px;
  }
`;

export const FooterBarText = styled.div`
  color: var(--color-icons);
  padding: 28px 0 20px 0;
  display: flex;
  justify-content: center;

  background-position: bottom right;
  background-size: 179px 155px;
  background-repeat: no-repeat;
  background-image: -webkit-image-set(url(${spinachFooterRight}) 2x);

  > span {
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    padding: 32px 0;
    background-size: 341px 261px;
    background-image: -webkit-image-set(url(${spinachFooterRight}) 2x);
  }

  @media (min-width: 1440px) {
    background-size: 531px 391px;
    background-image: -webkit-image-set(url(${spinachFooterRight}) 2x);
  }
`;

export const RightText = styled.span`
  margin-left: 14px;
`;

export const MainContainer = styled.main`
  background-position: bottom -250px left;
  background-size: 315px 487px;
  background-repeat: no-repeat;
  background-image: -webkit-image-set(url(${spinachFooterLeft}) 2x);

  @media (min-width: 768px) {
    background-position: bottom -380px left;
    background-size: 500px 790px;
    background-image: -webkit-image-set(url(${spinachFooterLeft}) 2x);
  }

  @media (min-width: 768px) {
    background-position: bottom -380px left;
    background-size: 500px 790px;
    background-image: -webkit-image-set(url(${spinachFooterLeft}) 2x);
  }

  @media (min-width: 1440px) {
    background-position: bottom -525px left;
    background-size: 696px 1037px;
    background-image: -webkit-image-set(url(${spinachFooterLeft}) 2x);
  }
`;
