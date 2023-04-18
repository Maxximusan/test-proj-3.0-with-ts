import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ButtonBox = styled.div`
  display: flex;
`;

export const Link = styled(NavLink)`
  position: absolute;
  top: 100px;
  left: 50px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 8px 16px;
  border-radius: 4px;

  text-decoration: none;
  color: #10e6e6;
  background-color: #7e7cc0;
  font-weight: 500;
  &:hover {
    color: #921534;
  }
`;
