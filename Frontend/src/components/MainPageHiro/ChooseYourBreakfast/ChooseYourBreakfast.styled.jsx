import styled from 'styled-components';

import BgImg from "../../../images/MainPageHero/ChooseYour1x.png"



export const ContentContainer = styled.div`
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${BgImg});

`;

export const TextContainer = styled.div`

  background-color: var(--color-bg-modal);
  color: var(--color-text-2);
  font-weight: 500;
  font-size: 12px;
  position: absolute;
  top: 113px;
  right: 7px;
  max-width: 225px;
  border-radius: 8px;
  padding: 10px;

  & span {
    color: var(--color-text-5);
  }
`;
export const LinkRecipies = styled.a`
  display: flex;
  justify-content: flex-end;
  color: var(--color-text-2);
  transition: color var(--transition-time) var(--cubic);
  align-items: center;

  &:hover,
  &:focus {
    color: var(--color-text-4);
  }
`;
