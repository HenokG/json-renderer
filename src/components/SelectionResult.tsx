import { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
  color: #ce1d4e;
`;

const StyledDiv = styled.div`
  margin-bottom: 1em;
  font-weight: bold;
`;

const SelectionResult: FunctionComponent<{
  selectedKey: string;
  selectedValue: string;
}> = ({ selectedKey, selectedValue }) => (
  <StyledDiv>
    <span>Selected: </span>
    <StyledSpan>res.{selectedKey}</StyledSpan> with value of
    <StyledSpan> {String(selectedValue)}</StyledSpan>
  </StyledDiv>
);

export { SelectionResult };
