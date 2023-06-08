export const isNumber = (value: string) => /^\d+\.\d+$|^\d+$/.test(value);

export const isObjectOrArray = (value: unknown) => typeof value === 'object';
