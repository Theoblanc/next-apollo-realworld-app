import { css, Global } from "@emotion/react";
import React from "react";

export const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }
    `}
  />
);
