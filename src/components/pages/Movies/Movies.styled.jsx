import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MoviesList = styled.ul`
  list-style: none;
  color: #000;
`;
export const MoviesNavLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
`;
export const MoviesItem = styled.li`
  margin-bottom: 7px;
`;
