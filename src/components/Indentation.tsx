import { FunctionComponent } from 'react';

const INDENTATION_SIZE = 4;

export const Indentation: FunctionComponent<{ indentLevel: number }> = ({
  indentLevel
}) => {
  const indentation = '\u00A0'.repeat(INDENTATION_SIZE * indentLevel);
  return <span style={{ whiteSpace: 'pre' }}>{indentation}</span>;
};
