import React from 'react';
import {
  RenderFacebook,
  RenderYoutube,
  RenderTwitter,
  RenderInstargram,
} from './RenderSvg';

import { SocialWrapper, SocialIconStyle } from './SocialMediaBar.styled';

export function SocialMediaBar() {
  return (
    <SocialWrapper>
      <SocialIconStyle>
        <RenderFacebook />
      </SocialIconStyle>

      <SocialIconStyle>
        <RenderYoutube />
      </SocialIconStyle>

      <SocialIconStyle>
        <RenderTwitter />
      </SocialIconStyle>

      <SocialIconStyle>
        <RenderInstargram />
      </SocialIconStyle>
    </SocialWrapper>
  );
}
