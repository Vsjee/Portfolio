import React from 'react'
import GlobalStyle from './globalStyles'
import { Footer, NavBar } from './components'
import ContactForm from './components/Form/Form'
import { About, Projects, Skills } from './pages'


function App() {
	return (
		<>
			<GlobalStyle />
			<NavBar />
			<About />
			<Skills />
			<Projects />
			<ContactForm />
			<Footer />
		</>
	)
}

export default App