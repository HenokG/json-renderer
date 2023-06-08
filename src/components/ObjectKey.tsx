import { styled } from 'styled-components';
import { FunctionComponent } from 'react';

const StyledSpan = styled.span`
  cursor: pointer;
  color: #0076ffff;

  &:hover {
    text-decoration: underline;
  }
`;

interface Props {
  value: string;
  onClick: () => void;
  isClickable: boolean;
}

export const ObjectKey: FunctionComponent<Props> = ({
  value,
  onClick,
  isClickable = true
}) =>
  isClickable ? (
    <StyledSpan onClick={onClick}>{`${value}: `}</StyledSpan>
  ) : (
    <span>{`${value}: `}</span>
  );
