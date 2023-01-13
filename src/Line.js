import styled from 'styled-components'


const Line = styled.line`
   stroke: ${props => props.color};
   stroke-width: ${props => props.width};
   stroke-linecap: ${props => props.linecap};
`;

export default Line;

