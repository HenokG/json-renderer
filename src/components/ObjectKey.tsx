import { styled } from 'styled-components';
import { FunctionComponent } from 'react';

const StyledSpan = styled.span`
  cursor: pointer;
  color: #0076ffff;

  &:hover {
    text-decoration: underline;
  }
`;

export const ObjectKey: FunctionComponent<{
  value: string;
  onClick: () => void;
}> = ({ value, onClick }) => {
  return <StyledSpan onClick={onClick}>{`${value}: `}</StyledSpan>;
};
