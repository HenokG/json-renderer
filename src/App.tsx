import { JsonExplorer } from './components/JSONExplorer';
import { SelectionResult } from './components/SelectionResult';
import { FunctionComponent, useState } from 'react';
import { get } from 'lodash';
import { styled } from 'styled-components';

interface Selection {
  key: string;
  value: any;
}

const StyledParagraph = styled.p`
  font-style: italic;
  font-weight: bold;
  color: lightseagreen;
`;

const App: FunctionComponent<{ src: Record<string, unknown> | unknown[] }> = ({
  src
}) => {
  const [selection, setSelection] = useState<Selection>();

  const onKeyClick = (path: string) => {
    setSelection({ key: path, value: get(src, path) });
  };

  return (
    <div className="App">
      {selection?.key ? (
        <SelectionResult
          selectedKey={selection.key}
          selectedValue={selection.value}
        />
      ) : (
        <StyledParagraph>Click a key or value to see result</StyledParagraph>
      )}
      <JsonExplorer data={src} indentLevel={1} onKeyClick={onKeyClick} />
    </div>
  );
};

export default App;
