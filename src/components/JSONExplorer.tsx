import { FunctionComponent } from 'react';
import { RenderObject, RenderObjectProps } from './RenderObject';
import { RenderValue, ValueProps } from './RenderValue';
import { Indentation } from './Indentation';

interface Props {
  data: any;
  onKeyClick: (path: string) => void;
  indentLevel?: number;
}

interface RenderProps {
  openingBrace: '{' | '[';
  closingBrace: '}' | ']';
  renderComponent:
    | FunctionComponent<RenderObjectProps>
    | FunctionComponent<ValueProps>;
}

const dataTypeToRenderMap: Record<string, RenderProps> = {
  array: { openingBrace: '[', closingBrace: ']', renderComponent: RenderValue },
  object: {
    openingBrace: '{',
    closingBrace: '}',
    renderComponent: RenderObject
  }
};

const JsonExplorer: React.FC<Props> = ({
  data,
  onKeyClick,
  indentLevel = 0
}) => {
  const render = Array.isArray(data)
    ? dataTypeToRenderMap.array
    : dataTypeToRenderMap.object;

  return (
    <div>
      <span>{render.openingBrace}</span>
      <Indentation indentLevel={indentLevel} />
      <div>
        <render.renderComponent
          value={data}
          indentLevel={indentLevel}
          onKeyClick={onKeyClick}
        />
      </div>
      <span>{render.closingBrace}</span>
    </div>
  );
};

export { JsonExplorer };
