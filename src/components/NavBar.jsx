import React from 'react';
import '../styles/navbar.css';
import Welcome from './Welcome';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function NavBar() {
	return (
		<BrowserRouter>
			<div className='container'>
				<header className='head'>
					<a href=''>
						<h2 className='head--logo'>Logo</h2>
					</a>
					<nav className='head--nav'>
						<ul className='head--nav--list'>
							<li className='head--nav--list--item'>
								<Link to='#about' smooth>
									About
								</Link>
							</li>
							<li className='head--nav--list--item'>
								<Link to='#skills' smooth>
									Skills
								</Link>
							</li>
							<li className='head--nav--list--item'>
								<Link to='#projects' smooth>
									Projects
								</Link>
							</li>
							<li className='head--nav--list--item'>
								<Link to='#contact' smooth>
									Contact
								</Link>
							</li>
						</ul>
					</nav>
				</header>
				<Welcome />
			</div>
		</BrowserRouter>
	);
}

export default NavBar;
