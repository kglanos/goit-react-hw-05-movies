import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledMovList = styled.div`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledUl = styled.ul`
width: auto;
  height: auto;
  list-style-type: none;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
  padding: 0;
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none;
  color: grey;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px; /* Adjust the margin as needed */

  :hover {
    color: tomato;
  }
`;

export const StyledImg = styled.img`
max-width: 220px;
height: 305px;
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const StyledTitle = styled.p`
  margin: 0;
`;