import React from 'react'
import '../../styles/about.css'

function About() {
  return (
    <div className='about' id='about'>
      <h2>About</h2>
      <ul className='about--list'>
        <li className='about--list--item'>
          <img src="" alt="photo" width='200px' />
        </li>
        <li className='about--list--item'>
          <div className='about--list--item--div'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem distinctio quasi magni iure soluta! Aspernatur, unde quos ratione blanditiis sapiente quas, odit eligendi impedit nam, officiis deserunt aliquam est illum? Repellendus suscipit, eligendi debitis fuga labore commodi unde sunt facilis quidem dignissimos veritatis officiis, ea est odit culpa aut, provident earum. Vitae exercitationem sapiente quae nemo assumenda eius, rem repellendus!</p>
            <a href=""><button>GitHub</button></a>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default About