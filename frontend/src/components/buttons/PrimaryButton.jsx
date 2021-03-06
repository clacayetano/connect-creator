import styled from "styled-components";
import React from "react";
import defaultTheme from "../Theme";

const Button = styled.button`
  border-radius: 2rem;
  padding: 1rem;
  display: block;
  vertical-align: center;
  color: #ffffff;
  font-family: ${defaultTheme.fonts.heading};
  font-weight: 400;
  text-align: center;
  font-size: 16px;
  background-color: ${defaultTheme.accent.orange};
  transition: ${defaultTheme.animations.hover};
  border: none;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;
export default Button;
