import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
`;
export const Wrapper = styled.div`
  display: flex;
  padding-bottom: 20px;
`;
export const WrapperText = styled.div`
  margin-left: 10px;
`;
export const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;
export const TextTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`;
export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
  text-align: justify;
`;
export const LinkNav = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: #000;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`;
export const LinkBtn = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  border: solid;
  border-color: orangered;
  border-radius: 3px;
  color: #000;
  margin-bottom: 15px;
  padding: 5px 5px;
  cursor: pointer;
  &:hover,
  :focus {
    color: white;
    background-color: orangered;
  }
`;
