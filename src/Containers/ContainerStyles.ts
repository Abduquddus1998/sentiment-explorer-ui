import styled from "styled-components";

export const SimpleLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.mainBackgroundColor};
`;
