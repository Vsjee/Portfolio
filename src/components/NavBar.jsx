import React from 'react'
import '../styles/navbar.css'
import Welcome from './Welcome'

function NavBar() {
	return (
		<div className='container'>
			<header className='head'>
				<a href=""><h2 className='head--logo'>Logo</h2></a>
				<nav className='head--nav'>
					<ul className='head--nav--list'>
						<li className='head--nav--list--item'><a href="">Skills</a></li>
						<li className='head--nav--list--item'><a href="">Projects</a></li>
						<li className='head--nav--list--item'><a href="">About</a></li>
						<li className='head--nav--list--item'><a href="">Contact</a></li>
					</ul>
				</nav>
			</header>
			<Welcome />
		</div>
	)
}

export default NavBar