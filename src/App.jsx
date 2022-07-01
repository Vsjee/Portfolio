import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Form from './components/Form'
import Welcome from './components/Welcome'

function App() {
	return (
		<div>
			<NavBar />
			<Welcome />
			<Form />
			<Footer />
		</div>
	)
}

export default App