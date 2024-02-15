import styled from 'styled-components';
export const ContentContainer = styled.div`
  /* tu będzie zdjęcie sałaty i cały kontener w formie absolute do którego będzie orientowany to białe okno  */
  position: relative;
`;

export const TextContainer = styled.div`
  background-color: var(--color-bg-modal);
  position: absolute;
  top: 113px;
  right: 7px;
  max-width: 225px;
  border-radius: 8px;
`;
