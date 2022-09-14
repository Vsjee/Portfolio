import React from 'react'
import ProjectsStyles from './ProjectsStyles'
import toDo from '../../assets/projects/toDo.png'
import Button from '../../components/ui/button/Button'

function Projects() {

	const { ProjectsContainer, Div, Img } = ProjectsStyles

	return (
		<>
			<h2 id='projects' style={{ display: 'flex', justifyContent: 'center', paddingTop: '3rem' }}>Projects</h2>
			<ProjectsContainer>
				<Div>
					<a href="https://vsjee.github.io/React-to-do/" target='_blank'>
						<Img src={toDo} alt="project" />
					</a>
					<a href="https://vsjee.github.io/React-to-do/" target='_blank'>
						<Button >To-Do</Button>
					</a>
				</Div>
				<Div>
					<a href="">
						<Img src={toDo} alt="project" width="300px" />
					</a>
					<a href="" target='_blank'>
						<Button>s2</Button>
					</a>
				</Div>
				<Div>
					<a href="">
						<Img src={toDo} alt="project" width="300px" />
					</a>
					<a href="" target='_blank'>
						<Button>s3</Button>
					</a>
				</Div>
				<Div>
					<a href="">
						<Img src={toDo} alt="project" width="300px" />
					</a>
					<a href="" target='_blank'>
						<Button>s4</Button>
					</a>
				</Div>
			</ProjectsContainer >
		</>
	)
}

export default Projects