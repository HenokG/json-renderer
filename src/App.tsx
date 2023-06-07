import { JsonExplorer } from './components/JSONExplorer';
import SelectionResult from './components/SelectionResult';
import { FC, useState } from 'react';
import { get } from 'lodash';

interface Selection {
  key: string;
  value: any;
}

const App: FC<{ src: any }> = ({ src }) => {
  const [selection, setSelection] = useState<Selection>();

  const onKeyClick = (path: string) => {
    setSelection({ key: path, value: get(src, path) });
  };

  return (
    <div className="App">
      {selection?.key && (
        <SelectionResult
          selectedKey={selection.key}
          selectedValue={selection.value}
        />
      )}
      <JsonExplorer data={src} indentLevel={1} onKeyClick={onKeyClick} />
    </div>
  );
};

export default App;
