export function addAttributes(innerHTML: string, attributes: Record<string, string>) {
  const attributesString = Object.entries(attributes)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  return innerHTML.replace(/^<(\w+)/, `<$1 ${attributesString}`);
}
