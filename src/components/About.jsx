import React from 'react'
import Button from './ui/Button'
import AboutStyles from './AboutStyles'
import react from '../assets/react.svg'

function About() {

  const { AboutContainer, Info, Img, Div } = AboutStyles

  return (
    <AboutContainer id="about">
      <h2>About</h2>
      <Info>
        <Img src={react} alt="photo" width='200px' />
        <Div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem distinctio quasi magni iure soluta! Aspernatur, unde quos ratione blanditiis sapiente quas, odit eligendi impedit nam, officiis deserunt aliquam est illum? Repellendus suscipit, eligendi debitis fuga labore commodi unde sunt facilis quidem dignissimos veritatis officiis, ea est odit culpa aut, provident earum. Vitae exercitationem sapiente quae nemo assumenda eius, rem repellendus!</p>
          <a href="https://github.com/Vsjee" target="_blank"><Button>GitHub</Button></a>
        </Div>
      </Info>
    </AboutContainer>
  )
}

export default About