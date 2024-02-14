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
      <SocialIconStyle
        target="blanc"
        rel="noopener noreferrer"
        href="https://www.facebook.com/"
      >
        <RenderFacebook />
      </SocialIconStyle>

      <SocialIconStyle
        target="blanc"
        rel="noopener noreferrer"
        href="https://www.youtube.com/"
      >
        <RenderYoutube />
      </SocialIconStyle>

      <SocialIconStyle
        target="blanc"
        rel="noopener noreferrer"
        href="https://twitter.com/"
      >
        <RenderTwitter />
      </SocialIconStyle>

      <SocialIconStyle
        target="blanc"
        rel="noopener noreferrer"
        href="https://www.instagram.com/"
      >
        <RenderInstargram />
      </SocialIconStyle>
    </SocialWrapper>
  );
}
