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
  border: 1px solid ${(props) => props.theme.menuHeaderBgColor};
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
`;

export const MenuItem = styled.li<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  border: 1px solid
    ${(props) =>
      props.isActive
        ? props.theme.activeMenuBorderColor
        : props.theme.menuItemBgColor};
  color: ${(props) => props.theme.mainTextColor};
  border-radius: 10px;
  cursor: pointer;
  padding: 0.5rem 0.8rem;
  background-color: ${(props) => props.theme.menuItemBgColor};
  margin-bottom: 0.5rem;
  height: 25px;
  max-width: 273px;
  transition: all 0.5s ease-out;

  div {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 270px;
  }

  &:last-child {
    margin-bottom: 3rem;
  }
`;

export const MainPageWrapper = styled.div`
  margin-left: 332px;
  width: 100%;
  color: ${(props) => props.theme.mainTextColor};
  position: relative;
`;

export const PageContainer = styled.div`
  padding: 5rem 2rem 2rem 2rem;
`;

export const HeaderContainer = styled.div`
  position: fixed;
  width: calc(100% - 396px);
  max-width: calc(100% - 396px);
  height: 55px;
  background-color: ${(props) => props.theme.menuBgColor};
  z-index: 3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 2rem;
  -webkit-box-shadow: 6px 7px 5px 0 rgb(36 36 36);
  -moz-box-shadow: 6px 7px 5px 0 rgb(36 36 36);
  box-shadow: 6px 7px 5px 0 rgb(36 36 36);
`;

export const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgb(28 188 157);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 400;
`;

export const ProfileMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 70px;
  background-color: ${(props) => props.theme.menuBgColor};
  position: absolute;
  z-index: 4;
  top: 60px;
  padding: 1rem;
  border-radius: 10px;
  -webkit-box-shadow: -1px 4px 5px 1px rgb(36 36 36);
  -moz-box-shadow: -1px 4px 5px 1px rgb(36 36 36);
  box-shadow: -1px 4px 5px 1px rgb(36 36 36);

  &:after {
    position: absolute;
    top: -8px;
    right: 13px;
    width: 0;
    height: 0;
    content: "";
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid ${(props) => props.theme.menuBgColor};
  }

  div {
    margin-bottom: 0.5rem;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
