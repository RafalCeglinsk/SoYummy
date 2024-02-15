import styled from 'styled-components';
export const ContentContainer = styled.div`
  /* tu będzie zdjęcie sałaty i cały kontener w formie absolute do którego będzie orientowany to białe okno  */
  position: relative;
`;

export const TextContainer = styled.div`
  background-color: var(--color-bg-modal);
  color:var(--color-text-2);
  font-weight: 500;
  font-size: 12px;
  position: absolute;
  top: 113px;
  right: 7px;
  max-width: 225px;
  border-radius: 8px;
  padding:10px;

  & span{
    color:var(--color-text-5);
  }
`;
export const LinkRecipies = styled.a`
    
display: flex;
justify-content: flex-end;
color:var(--color-text-2);
transition: color var(--transition-time) var(--cubic);
align-items: center;


&:hover, &:focus {
    color: var(--color-text-4);

  }
`