import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    padding:0;
    margin:0;
    
    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: inherit;
    }

    &::-webkit-scrollbar-thumb {
      background: #888888;
      height: 80px;
      border-radius: 25px;
    }
    
    .ant-modal-content {
      border-radius: 10px;
    }
  }
`;
