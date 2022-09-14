import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBarStyles from './NavBarStyles';
import Welcome from '../../pages/welcome-section/Welcome';
import Button from '../ui/button/Button';
import NavLink from '../ui/navlink/NavLink';

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