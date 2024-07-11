import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 300px;
  background-color: ${(props) => props.theme.menuBgColor};
  min-height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  -webkit-box-shadow: 8px 0 12px 0 rgb(36 36 36);
  -moz-box-shadow: 8px 0 12px 0 rgb(36 36 36);
  box-shadow: 8px 0 12px 0 rgb(36 36 36);
  padding: 1.5rem 1rem;
  overflow-y: scroll;
`;

export const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid ${(props) => props.theme.menuHeaderBgColor};
  color: ${(props) => props.theme.mainTextColor};
  padding: 0.5rem 0.8rem;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${(props) => props.theme.menuItemBgColor};

  svg {
    fill: ${(props) => props.theme.menuHeaderBgColor};
  }
`;

export const MenuItemList = styled.ul`
  padding: 0;
  margin-top: 2rem;
  list-style-type: none;

  li {
    display: flex;
    align-items: center;
    border: none;
    color: ${(props) => props.theme.mainTextColor};
    border-radius: 10px;
    cursor: pointer;
    padding: 0.5rem 0.8rem;
    background-color: ${(props) => props.theme.menuItemBgColor};
    margin-bottom: 0.5rem;
    height: 25px;
    max-width: 273px;

    div {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      max-width: 270px;
    }

    &:last-child {
      margin-bottom: 3rem;
    }
  }
`;
