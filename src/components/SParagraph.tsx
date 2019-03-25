import styled from 'styled-components';
export const SParagraph = styled.div.attrs({
  className: ` f6 tl ph2 pb3`
})`
  line-height: 24px;
  color: ${(props: {
  color?: string;
}) => (props.color ? props.color : '#6C6C6C')};
`;
