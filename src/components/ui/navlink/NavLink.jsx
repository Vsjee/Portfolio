import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';

const NavLink = styled(Link)`
  color: rgb(0, 0, 0);
  transition: .4s ease-in-out;

  &:hover {
    color: #ff6655;
  }
`;

export default NavLink