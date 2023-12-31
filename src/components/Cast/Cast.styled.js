import styled from 'styled-components';

export const StyledCastsList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
export const StyledCastsItem = styled.li`
  width: 203px;
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
export const StyledCastsImg = styled.img`
  background-position: center;
  max-width: 220px;
  height: 305px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;