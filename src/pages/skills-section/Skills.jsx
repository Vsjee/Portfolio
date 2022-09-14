import React from 'react';
import SkillsStyles from './SkillsStyles';
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import javascript from '../../assets/javascript.svg';
import react from '../../assets/react.svg';
import python from '../../assets/python.svg';
import java from '../../assets/java.svg';
import git from '../../assets/git.svg';
import github from '../../assets/github.svg';

function Skills() {

	const { SkillsContainer, SkillList, SkillItem, Img } = SkillsStyles

	return (
		<SkillsContainer id='skills'>
			<h2> Skills</h2>
			<SkillList>
				<SkillItem className='container--skills--list--item'>
					<Img src={html} alt='html' width='100' />
					HTML5
				</SkillItem>
				<SkillItem className='container--skills--list--item'>
					<Img src={css} alt='css' width='100' />
					CSS3{' '}
				</SkillItem>
				<SkillItem className='container--skills--list--item'>
					<Img src={javascript} alt='html' width='100' />
					JavaScript
				</SkillItem>
				<SkillItem className='container--skills--list--item'>
					<Img src={react} alt='html' width='100' />
					React
				</SkillItem>
				<SkillItem className='container--skills--list--item'>
					<Img src={python} alt='html' width='100' />
					Python
				</SkillItem>
				<SkillItem className='container--skills--list--item'>
					<Img src={java} alt='html' width='100' />
					Java
				</SkillItem>
				<SkillItem className='container--skills--list--item'>
					<Img src={git} alt='html' width='100' />
					Git
				</SkillItem>
				<SkillItem className='container--skills--list--item'>
					<Img src={github} alt='html' width='100' />
					Github
				</SkillItem>
			</SkillList>
		</SkillsContainer >
	);
}

export default Skills;
