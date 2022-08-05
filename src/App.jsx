import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Form from './components/Form'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'
import GlobalStyle from './globalStyles'

function App() {
	return (
		<div>
			<GlobalStyle />
			<NavBar />
			<About />
			<Skills />
			<Projects />
			<Form />
			<Footer />
		</div>
	)
}

export default App