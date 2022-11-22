import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const TitleMovies = styled.h1`
  margin-bottom: 15px;
`;
export const MoviesList = styled.ul`
  display: grid;
  max-width: calc(100vw - 32px);

  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
export const MoviesItem = styled.li`
  padding: 10px;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const MoviesItemImage = styled.img`
  display: block;
  max-width: 100%;
  height: 460px;
  width: 100%;

  padding-bottom: 10px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
export const MoviesNavLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
`;
export const MoviesText = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
  padding-left: 5px;
`;
export const Text = styled.p`
  font-size: 16px;
  padding-left: 5px;
`;
