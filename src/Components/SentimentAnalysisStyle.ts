import styled from "styled-components";

export const SentimentWrapper = styled.div<{ isMain?: boolean }>`
  width: 100%;

  textarea {
    max-width: 100%;
    width: calc(100% - 1.6rem);
    border: 1px solid
      ${(props) =>
        props.isMain
          ? props.theme.inputBorderColor
          : props.theme.activeMenuBorderColor};
    background-color: ${(props) => props.theme.menuItemBgColor};
    border-radius: 10px;
    color: ${(props) => props.theme.mainTextColor};
    padding: 0.8rem;
    font-size: 16px;

    &:focus {
      outline: none;
      border-color: ${(props) =>
        props.isMain
          ? props.theme.activeMenuBorderColor
          : props.theme.activeMenuBorderColor};
    }

    &::placeholder {
      color: ${(props) => props.theme.inputPlaceholderColor};
    }
  }
`;

export const AnalyzeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 2rem 0;

  button {
    width: 250px;
    border-radius: 10px;
    height: 40px;
  }
`;
