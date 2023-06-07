import { Indentation } from './Indentation';
import { FunctionComponent } from 'react';
import { RenderObject } from './RenderObject';

export interface ValueProps {
  value: any;
  indentLevel: number;
  onKeyClick: (path: string) => void;
  keyPath?: string;
}

export const RenderValue: FunctionComponent<ValueProps> = ({
  value,
  indentLevel,
  onKeyClick,
  keyPath = ''
}) => {
  if (Array.isArray(value)) {
    return value.length === 0 ? (
      <></>
    ) : (
      <>
        {indentLevel !== 0 && <span>[</span>}
        <div>
          {value.map((item, i) => (
            <div key={i}>
              <Indentation indentLevel={indentLevel + 1} />
              <RenderValue
                value={item}
                indentLevel={indentLevel + 1}
                keyPath={`${keyPath}[${i}]`}
                onKeyClick={onKeyClick}
              />
            </div>
          ))}
        </div>
        <Indentation indentLevel={indentLevel} />
        {indentLevel !== 0 && <span>]</span>}
      </>
    );
  } else if (typeof value === 'object') {
    const keys = Object.keys(value);
    return keys.length === 0 ? (
      <span>{'{}'}</span>
    ) : (
      <>
        <span>{'{'}</span>
        <div>
          <RenderObject
            value={value}
            indentLevel={indentLevel + 1}
            parentPath={keyPath}
            onKeyClick={onKeyClick}
          />
        </div>
        <Indentation indentLevel={indentLevel} />
        <span>{'}'}</span>
      </>
    );
  } else {
    return <span onClick={() => onKeyClick(keyPath)}>{value}</span>;
  }
};
