import React from 'react';

import { RenderArrow } from '../../RenderSvg/RenderSvg';
import { ContentContainer, TextContainer,LinkRecipies } from './ChooseYourBreakfast.styled';

export function ChooseYourBreakfast() {
  return (
    <ContentContainer>
      <TextContainer>
        <span>Delicious and healthy</span> way to enjoy a variety of fresh
        ingredients in one satisfying meal.
        <LinkRecipies>
        See recepies
        <RenderArrow/>
        </LinkRecipies>


      </TextContainer>
    </ContentContainer>
  );
}
