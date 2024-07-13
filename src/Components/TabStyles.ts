import styled from "styled-components";

export const TabsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const Tab = styled.div<{ isActive: boolean }>`
  background-color: ${(props) => props.theme.mainBackgroundColor};
  width: 170px;
  text-align: center;
  cursor: pointer;
  border-bottom: 2px solid
    ${(props) =>
      props.isActive
        ? props.theme.tabActiveBorderColor
        : props.theme.tabBorderColor};
  transition: all 0.5s ease-out;
  padding-bottom: 0.5rem;
  opacity: ${(props) => (props.isActive ? 1 : 0.7)};
`;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
`;

export const Columns = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  text-transform: capitalize;
  height: 46px;
  border-radius: 10px;
  border: 2px solid #3b3b3b;
  margin-bottom: 1rem;

  div {
    display: flex;
    align-items: center;
    width: 33%;
    padding: 0 1rem;
  }
`;

export const Rows = styled.div`
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 46px;
  border-radius: 10px;
  background-color: #3b3b3b;
  border: none;
  margin-bottom: 0.5rem;

  div {
    padding: 0 1rem;
    width: 33%;
    display: flex;
    align-items: center;
  }
`;
