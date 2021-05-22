enum FlexType {
  Block = 'block',
  Inline = 'inline',
}

export const flexVerticalCenter = (type: FlexType = FlexType.Block) => `
  display: ${type === 'inline' ? 'inline-flex' : 'flex'};
  align-items: center;
`;

export const flexCenter = (type: FlexType = FlexType.Block) => `
  ${flexVerticalCenter(type)};
  justify-content: center;
`;
