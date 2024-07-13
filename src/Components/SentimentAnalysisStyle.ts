import styled from "styled-components";

export const SentimentWrapper = styled.div`
  width: 100%;

  textarea {
    max-width: 100%;
    width: calc(100% - 1.6rem);
    border: 2px solid ${(props) => props.theme.activeMenuBorderColor};
    background-color: ${(props) => props.theme.menuItemBgColor};
    border-radius: 10px;
    color: ${(props) => props.theme.mainTextColor};
    padding: 0.8rem;

    &:focus {
      outline: none;
    }
  }
`;
