import React from 'react';
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import javascript from '../../assets/javascript.svg';
import react from '../../assets/react.svg';
import python from '../../assets/python.svg';
import java from '../../assets/java.svg';
import git from '../../assets/git.svg';
import github from '../../assets/github.svg';
import '../../styles/skills.css';

function Skills() {
    return (
        <div className='container--skills' id='skills'>
            <h2>Skills</h2>
            <ul className='container--skills--list'>
                <li className='container--skills--list--item'>
                    <img src={html} alt='html' width='100' />
                    HTML5
                </li>
                <li className='container--skills--list--item'>
                    <img src={css} alt='css' width='100' />
                    CSS3{' '}
                </li>
                <li className='container--skills--list--item'>
                    <img src={javascript} alt='html' width='100' />
                    JavaScript
                </li>
                <li className='container--skills--list--item'>
                    <img src={react} alt='html' width='100' />
                    React
                </li>
                <li className='container--skills--list--item'>
                    <img src={python} alt='html' width='100' />
                    Python
                </li>
                <li className='container--skills--list--item'>
                    <img src={java} alt='html' width='100' />
                    Java
                </li>
                <li className='container--skills--list--item'>
                    <img src={git} alt='html' width='100' />
                    Git
                </li>
                <li className='container--skills--list--item'>
                    <img src={github} alt='html' width='100' />
                    Github
                </li>
            </ul>
        </div>
    );
}

export default Skills;
