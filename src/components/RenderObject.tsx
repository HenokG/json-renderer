import { Indentation } from './Indentation';
import { ObjectKey } from './ObjectKey';
import { FunctionComponent } from 'react';
import { RenderValue } from './RenderValue';

export interface RenderObjectProps {
  value: Record<string, any>;
  indentLevel: number;
  onKeyClick: (path: string) => void;
  parentPath?: string;
}

export const RenderObject: FunctionComponent<RenderObjectProps> = ({
  value,
  indentLevel,
  onKeyClick,
  parentPath = ''
}) => {
  const keys = Object.keys(value);
  return (
    <>
      {keys.map((key, index) => {
        const keyPath = parentPath ? `${parentPath}.${key}` : key;
        return (
          <div key={key}>
            <Indentation indentLevel={indentLevel} />
            <ObjectKey
              value={key}
              onClick={() => onKeyClick(keyPath)}
            ></ObjectKey>
            <RenderValue
              value={value[key]}
              indentLevel={indentLevel}
              keyPath={keyPath}
              onKeyClick={onKeyClick}
            />
            {index !== keys.length - 1 && ','}
          </div>
        );
      })}
    </>
  );
};
