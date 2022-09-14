import React from 'react'
import { AiOutlineArrowDown } from "react-icons/ai";
import WelcomeStyles from './WelcomeStyles';
import styled from 'styled-components';
import NavLink from '../../components/ui/navlink/NavLink';

const Icon = styled(AiOutlineArrowDown)`
  font-size: 30px;
	transition: .4s ease-in-out;

	&:hover{
		color: #be4f43;
	}
`

function Welcome() {

	const { Section, InfoContainer, DownBtn } = WelcomeStyles

	return (
		<Section>
			<InfoContainer>
				<h1>David Hernandez</h1>
				<h3>software developer</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, error doloremque. Nemo sint fugiat doloremque voluptatum possimus labore nostrum voluptate adipisci harum animi, nam veritatis accusantium fugit sit culpa dolore! Eum nihil nulla nisi adipisci eius doloribus expedita? Fugiat cupiditate est illo cumque quasi hic quae saepe molestiae sunt tempora.</p>
			</InfoContainer>
			<NavLink to="#about" smooth>
				<DownBtn>
					<Icon />
				</DownBtn>
			</NavLink>
		</Section>
	)
}

export default Welcome