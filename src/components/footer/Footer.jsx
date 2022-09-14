import React from 'react'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import FooterStyles from './FooterStyles';

function Footer() {

	const { Foot, Ul, Icons, Reserved } = FooterStyles

	return (
		<Foot className='foot'>
			<Ul className='foot--list'>
				<li>
					<Icons href="https://github.com/Vsjee" target="_blank"><AiFillGithub /></Icons>
				</li>
				<li>
					<Icons href="https://linkedin.com/in/david-felipe-hernandez-547109205" target="_blank"><AiFillLinkedin /></Icons>
				</li>
			</Ul>
			<Reserved><span>David Hernandez</span> • All rights reserved © 2022.</Reserved>
		</Foot>
	)
}

export default Footer