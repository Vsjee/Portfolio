import React from 'react'
import '../../styles/projects.css'
import toDo from '../../assets/projects/toDo.png'

function Projects() {
    return (
        <div className='projects'>
            <h2>Projects</h2>
            <ul className='projects--list'>
                <li>
                    <a href="https://vsjee.github.io/React-to-do/">
                        <img src={toDo} alt="project" width="300px" />
                    </a>
                    <h4>To-Do</h4>
                </li>
                <li>
                    <a href="">
                        <img src={toDo} alt="project" width="300px" />
                    </a>
                    <h4>s2</h4>
                </li>
                <li>
                    <a href="">
                        <img src={toDo} alt="project" width="300px" />
                    </a>
                    <h4>s3</h4>
                </li>
                <li>
                    <a href="">
                        <img src={toDo} alt="project" width="300px" />
                    </a>
                    <h4>s4</h4>
                </li>

            </ul>
        </div>
    )
}

export default Projects