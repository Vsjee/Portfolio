import React from 'react'
import '../styles/footer.css'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Footer() {

	return (
		<footer className='foot'>
			<ul className='foot--list'>
				<li className='foot--list--item'>
					<a href="https://github.com/Vsjee" target="_blank"><AiFillGithub /></a>
				</li>
				<li className='foot--list--item'>
					<a href="https://linkedin.com/in/david-felipe-hernandez-547109205" target="_blank"><AiFillLinkedin /></a>
				</li>
			</ul>
			<p><span>David Hernandez</span> • All rights reserved © 2022.</p>
		</footer>
	)
}

export default Footer