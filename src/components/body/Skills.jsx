import React from 'react'
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import javascript from '../../assets/javascript.svg'
import react from '../../assets/react.svg'
import python from '../../assets/python.svg'
import java from '../../assets/java.svg'
import git from '../../assets/git.svg'
import github from '../../assets/github.svg'

function Skills() {
    return (
        <div>
            <ul>
                <li><img src={html} alt="html" width='100' /></li>
                <li><img src={css} alt="css" width='100' /></li>
                <li><img src={javascript} alt="html" width='100' /></li>
                <li><img src={react} alt="html" width='100' /></li>
                <li><img src={python} alt="html" width='100' /></li>
                <li><img src={java} alt="html" width='100' /></li>
                <li><img src={git} alt="html" width='100' /></li>
                <li><img src={github} alt="html" width='100' /></li>
            </ul>
        </div>
    )
}

export default Skills