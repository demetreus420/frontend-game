import styled from 'styled-components';

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(25vh / ${(props) => props.width})
  );
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  grid-gap: 1px;
  border: 8px ridge #ff0084;
  width: 100%;
  max-width: 20vw;
  bgackground: #111;
  outline: 13px ridge #00ffcc;
  outline-offset: 0px;
`;
