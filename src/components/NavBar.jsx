import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import NavBarStyles from './NavBarStyles';
import Welcome from './Welcome';
import Button from './ui/Button';

const NavLink = styled(Link)`
  color: rgb(0, 0, 0);
  transition: .3s ease-in-out;

  &:hover {
    color: #ff6655;
    transition: .3s ease-in-out;
  }
`;

function NavBar() {

	const { Header, Ul } = NavBarStyles

	return (
		<BrowserRouter>
			<Header>
				<a href=''>
					<h2>Logo</h2>
				</a>
				<nav>
					<Ul className='head--nav--list'>
						<li className='head--nav--list--item'>
							<NavLink to='#about' smooth>
								About
							</NavLink>
						</li>
						<li className='head--nav--list--item'>
							<NavLink to='#skills' smooth>
								Skills
							</NavLink>
						</li>
						<li className='head--nav--list--item'>
							<NavLink to='#projects' smooth>
								Projects
							</NavLink>
						</li>
						<li className='head--nav--list--item'>
							<NavLink to='#contact' smooth>
								<Button primary='primary'>Contact</Button>
							</NavLink>
						</li>
					</Ul>
				</nav>
			</Header>
			<Welcome />
		</BrowserRouter>
	);
}

export default NavBar;